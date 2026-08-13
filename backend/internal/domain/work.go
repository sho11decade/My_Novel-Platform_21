package domain

import "time"

type WorkStatus string

const (
	WorkStatusDraft     WorkStatus = "draft"
	WorkStatusOngoing   WorkStatus = "ongoing"
	WorkStatusCompleted WorkStatus = "completed"
)

type Work struct {
	ID        string
	AuthorID  string
	Title     string
	Summary   string
	Status    WorkStatus
	IsPublic  bool
	CreatedAt time.Time
	UpdatedAt time.Time
}
