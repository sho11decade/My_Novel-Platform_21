package handler

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	chiMiddleware "github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/hatena/my-novel-platform-21/backend/internal/config"
)

func NewRouter(cfg config.Config) http.Handler {
	r := chi.NewRouter()

	r.Use(chiMiddleware.RequestID)
	r.Use(chiMiddleware.RealIP)
	r.Use(chiMiddleware.Logger)
	r.Use(chiMiddleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173", "http://127.0.0.1:5173"},
		AllowedMethods: []string{"GET", "POST", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Authorization", "Content-Type"},
	}))

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		respondJSON(w, http.StatusOK, map[string]string{
			"status":  "ok",
			"appEnv":  cfg.AppEnv,
			"version": "scaffold",
		})
	})

	r.Route("/api/v1", func(api chi.Router) {
		api.Get("/health", func(w http.ResponseWriter, r *http.Request) {
			respondJSON(w, http.StatusOK, map[string]string{"status": "ok"})
		})

		api.Route("/auth", func(auth chi.Router) {
			auth.Post("/register", notImplemented("register"))
			auth.Post("/login", notImplemented("login"))
		})

		api.Get("/me", notImplemented("get me"))

		api.Route("/works", func(works chi.Router) {
			works.Get("/", notImplemented("list works"))
			works.Post("/", notImplemented("create work"))
			works.Get("/{workId}", notImplemented("get work"))
			works.Patch("/{workId}", notImplemented("update work"))
			works.Post("/{workId}/episodes", notImplemented("create episode"))
			works.Patch("/{workId}/episodes/{episodeId}", notImplemented("update episode"))
			works.Get("/{workId}/episodes/{episodeId}", notImplemented("get episode"))
			works.Post("/{workId}/bookmark", notImplemented("bookmark work"))
			works.Delete("/{workId}/bookmark", notImplemented("remove bookmark"))
		})

		api.Get("/me/bookmarks", notImplemented("list bookmarks"))
	})

	return r
}

func notImplemented(name string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		respondJSON(w, http.StatusNotImplemented, map[string]string{
			"code":    "NOT_IMPLEMENTED",
			"message": name + " is not implemented yet",
		})
	}
}

func respondJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
