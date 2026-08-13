package config

import "os"

type Config struct {
	AppEnv      string
	Port        string
	DatabaseURL string
	JWTSecret   string
}

func Load() Config {
	return Config{
		AppEnv:      getEnv("APP_ENV", "development"),
		Port:        getEnv("APP_PORT", "8080"),
		DatabaseURL: getEnv("DATABASE_URL", "postgres://novel:novel@localhost:5432/novel_platform?sslmode=disable"),
		JWTSecret:   getEnv("JWT_SECRET", "change-me"),
	}
}

func getEnv(key string, fallback string) string {
	value := os.Getenv(key)
	if value == "" {
		return fallback
	}

	return value
}
