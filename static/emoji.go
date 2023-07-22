package static

import (
	"io/fs"
	"os"
	"path/filepath"

	"github.com/owncast/owncast/models"
	"github.com/owncast/owncast/services/config"
	log "github.com/sirupsen/logrus"
)

// GetEmojiList returns a list of custom emoji from the emoji directory.
func GetEmojiList() []models.CustomEmoji {
	c := config.Get()
	emojiFS := os.DirFS(c.CustomEmojiPath)

	emojiResponse := make([]models.CustomEmoji, 0)

	walkFunction := func(path string, d os.DirEntry, err error) error {
		if d.IsDir() {
			return nil
		}

		emojiPath := filepath.Join(config.EmojiDir, path)
		singleEmoji := models.CustomEmoji{Name: d.Name(), URL: emojiPath}
		emojiResponse = append(emojiResponse, singleEmoji)
		return nil
	}

	if err := fs.WalkDir(emojiFS, ".", walkFunction); err != nil {
		log.Errorln("unable to fetch emojis: " + err.Error())
		return emojiResponse
	}

	return emojiResponse
}
