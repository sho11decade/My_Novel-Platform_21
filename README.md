# My_Novel-Platform_21

「カクヨム」を簡単に再現した小説投稿プラットフォーム

## 技術概要

- フロントエンド: React + Vite
- バックエンド: Go, OpenAPI, chi
- データベース: PostgreSQL
- 開発環境: Docker Compose

## 現在の構成

- `frontend/`: React + Vite の画面ひな型
- `backend/`: Go API のレイヤ構成ひな型
- `backend/openapi/openapi.yaml`: OpenAPI 契約の初期雛形
- `backend/migrations/`: 初期スキーマ雛形
- `docs/architecture.md`: 設計書

## 機能一覧

- ユーザー登録・ログイン機能
- 小説投稿・編集・削除機能
- 小説閲覧・検索機能
- コメント機能

## 起動方法

### Docker Compose

```bash
docker compose up --build
```

- フロントエンド: `http://localhost:5173`
- バックエンド: `http://localhost:8080`
- ヘルスチェック: `http://localhost:8080/health`

### ローカル開発

```bash
cd backend
go mod tidy
go run ./cmd/api
```

```bash
cd frontend
npm install
npm run dev
```

## 次の実装候補

1. OpenAPI の詳細化
2. `oapi-codegen` の導入
3. DB 接続と Repository 実装
4. JWT 認証基盤
5. 作品・話 API 実装
