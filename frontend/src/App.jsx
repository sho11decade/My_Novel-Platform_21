const featuredWorks = [
  { id: '1', title: '星巡りの旅人', summary: '星を追う少女の冒険譚', status: 'ongoing' },
  { id: '2', title: '白銀の図書館', summary: '禁書を巡る学園ファンタジー', status: 'draft' },
  { id: '3', title: '午前零時の手紙', summary: '手紙から始まる現代ドラマ', status: 'completed' },
]

function App() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div>
          <p style={styles.eyebrow}>React + Vite Scaffold</p>
          <h1 style={styles.title}>My Novel Platform</h1>
          <p style={styles.description}>
            小説投稿プラットフォームのフロントエンドひな型です。次の実装では一覧取得、作品詳細、認証画面を順に接続します。
          </p>
        </div>
        <div style={styles.apiCard}>
          <div style={styles.apiLabel}>API Base URL</div>
          <code style={styles.code}>{apiBaseUrl}</code>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>MVP Screens</h2>
            <span style={styles.badge}>Scaffold</span>
          </div>
          <div style={styles.grid}>
            {['ログイン', 'ユーザー登録', '作品一覧', '作品詳細', '話閲覧', 'マイページ', '作品作成/編集', '話作成/編集'].map((item) => (
              <div key={item} style={styles.card}>
                <strong>{item}</strong>
                <p style={styles.cardText}>画面ルーティングと API 接続の受け皿として追加予定です。</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Featured Works Mock</h2>
            <span style={styles.badge}>Dummy Data</span>
          </div>
          <div style={styles.list}>
            {featuredWorks.map((work) => (
              <article key={work.id} style={styles.workCard}>
                <div style={styles.workMeta}>
                  <span style={styles.status}>{work.status}</span>
                </div>
                <h3 style={styles.workTitle}>{work.title}</h3>
                <p style={styles.cardText}>{work.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)',
  },
  hero: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '64px 24px 32px',
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  eyebrow: {
    margin: '0 0 8px',
    fontSize: '14px',
    color: '#2563eb',
    fontWeight: 700,
  },
  title: {
    margin: '0 0 16px',
    fontSize: '40px',
    lineHeight: 1.1,
  },
  description: {
    margin: 0,
    maxWidth: '720px',
    color: '#475569',
  },
  apiCard: {
    minWidth: '280px',
    padding: '16px',
    borderRadius: '16px',
    background: '#0f172a',
    color: '#e2e8f0',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.18)',
  },
  apiLabel: {
    fontSize: '12px',
    opacity: 0.8,
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  code: {
    fontFamily: 'ui-monospace, SFMono-Regular, Consolas, monospace',
  },
  main: {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 24px 64px',
  },
  section: {
    marginTop: '32px',
    padding: '24px',
    background: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '24px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '9999px',
    padding: '6px 12px',
    background: '#dbeafe',
    color: '#1d4ed8',
    fontSize: '12px',
    fontWeight: 700,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  card: {
    padding: '20px',
    borderRadius: '18px',
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
  },
  list: {
    display: 'grid',
    gap: '16px',
  },
  workCard: {
    padding: '20px',
    borderRadius: '18px',
    border: '1px solid #e2e8f0',
  },
  workMeta: {
    marginBottom: '12px',
  },
  status: {
    display: 'inline-flex',
    borderRadius: '9999px',
    padding: '4px 10px',
    background: '#e2e8f0',
    color: '#334155',
    fontSize: '12px',
    fontWeight: 700,
  },
  workTitle: {
    margin: '0 0 8px',
    fontSize: '20px',
  },
  cardText: {
    margin: 0,
    color: '#64748b',
  },
}

export default App
