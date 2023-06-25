package webhooks

import (
	"bytes"
	"encoding/json"
	"net/http"
	"sync"

	log "github.com/sirupsen/logrus"

	"github.com/owncast/owncast/models"
)

const (
	// webhookWorkerPoolSize defines the number of concurrent HTTP webhook requests.
	webhookWorkerPoolSize = 10
)

// Job struct bundling the webhook and the payload in one struct.
type Job struct {
	webhook models.Webhook
	payload WebhookEvent
	wg      *sync.WaitGroup
}

// initWorkerPool starts n go routines that await webhook jobs.
func (w *LiveWebhookManager) initWorkerPool() {
	w.queue = make(chan Job)

	// start workers
	for i := 1; i <= webhookWorkerPoolSize; i++ {
		go w.worker(i, w.queue)
	}
}

func (w *LiveWebhookManager) addToQueue(webhook models.Webhook, payload WebhookEvent, wg *sync.WaitGroup) {
	log.Tracef("Queued Event %s for Webhook %s", payload.Type, webhook.URL)
	w.queue <- Job{webhook, payload, wg}
}

func (w *LiveWebhookManager) worker(workerID int, queue <-chan Job) {
	log.Debugf("Started Webhook worker %d", workerID)

	for job := range queue {
		log.Debugf("Event %s sent to Webhook %s using worker %d", job.payload.Type, job.webhook.URL, workerID)

		if err := w.sendWebhook(job); err != nil {
			log.Errorf("Event: %s failed to send to webhook: %s Error: %s", job.payload.Type, job.webhook.URL, err)
		}
		log.Tracef("Done with Event %s to Webhook %s using worker %d", job.payload.Type, job.webhook.URL, workerID)
		if job.wg != nil {
			job.wg.Done()
		}
	}
}

func (w *LiveWebhookManager) sendWebhook(job Job) error {
	jsonText, err := json.Marshal(job.payload)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", job.webhook.URL, bytes.NewReader(jsonText))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		return err
	}

	defer resp.Body.Close()

	if err := webhookRepository.SetWebhookAsUsed(job.webhook); err != nil {
		log.Warnln(err)
	}

	return nil
}
