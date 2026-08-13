# Repository Guidelines

## Project Structure & Module Organization
- `backend/` contains the Go API scaffold. Entry point: `backend/cmd/api/main.go`. Core layers live under `backend/internal/` (`config`, `handler`, `domain`, `repository`, `usecase`, `middleware`).
- `backend/openapi/openapi.yaml` is the contract-first API source. Keep generated code in `backend/internal/gen/`.
- `backend/migrations/` stores SQL migrations.
- `frontend/` contains the React + Vite app. Main files are `frontend/src/main.jsx` and `frontend/src/App.jsx`.
- `docs/architecture.md` documents the intended system design and MVP scope.

## Build, Test, and Development Commands
- `docker compose up --build` — starts frontend, backend, and PostgreSQL together.
- `cd backend && go mod tidy` — resolves Go dependencies.
- `cd backend && go run ./cmd/api` — runs the API locally on port `8080`.
- `cd backend && go test ./...` — runs all backend tests.
- `cd frontend && npm install` — installs frontend dependencies.
- `cd frontend && npm run dev` — starts the Vite dev server on port `5173`.
- `cd frontend && npm run build` — creates a production build.

## Coding Style & Naming Conventions
- Go: always run `go fmt ./...`. Keep packages small and layer-focused. Exported names use `PascalCase`; unexported names use `camelCase`.
- React: use functional components, one component per file when the UI grows. Component files use `PascalCase`; utility modules use `camelCase`.
- Prefer clear Japanese commit summaries or short imperative messages consistent with existing history.

## Testing Guidelines
- Backend tests should use Go’s standard tooling with `_test.go` filenames next to the target package.
- Add use case tests before repository integration tests when implementing new features.
- Frontend tests are not set up yet; if added, keep them close to the component or feature they cover.

## Commit & Pull Request Guidelines
- Existing commits are short and task-focused, for example `ひな型を構築`.
- Keep each commit scoped to one logical change.
- PRs should include: purpose, main changes, affected paths, setup or migration steps, and screenshots for UI changes.

## Security & Configuration Tips
- Do not commit real secrets. Use `.env.example` as the template for local configuration.
- Keep `JWT_SECRET` and database credentials environment-specific.
- Update `backend/openapi/openapi.yaml` before implementing new endpoints.
