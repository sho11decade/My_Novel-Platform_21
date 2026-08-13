package domain

import "time"

type Episode struct {
	ID        string
	WorkID    string
	EpisodeNo int
	Title     string
	Body      string
	CreatedAt time.Time
	UpdatedAt time.Time
}
