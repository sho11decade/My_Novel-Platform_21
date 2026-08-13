package main

import (
	"log"
	"net/http"

	"github.com/hatena/my-novel-platform-21/backend/internal/config"
	"github.com/hatena/my-novel-platform-21/backend/internal/handler"
)

func main() {
	cfg := config.Load()
	router := handler.NewRouter(cfg)

	log.Printf("api server listening on :%s", cfg.Port)
	if err := http.ListenAndServe(":"+cfg.Port, router); err != nil {
		log.Fatal(err)
	}
}
