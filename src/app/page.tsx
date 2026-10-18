import StandupTimelineStudioDemo from '@/components/StandupTimelineStudioDemo';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="badge">
          <span>⚡</span>
          <span>100% Offline • Windows 10 & 11 • Zero Cloud</span>
        </div>
        <h1 className="hero-title">
          Automated Daily Standups &amp; Local Work Journals.
        </h1>
        <p className="hero-subtitle">
          Stop struggling every morning trying to reconstruct what you built yesterday. 
          Standwise silently correlates your local git commits, branch updates, and active editor focus 
          into clean, formatted async standups ready for Slack, Teams, or Jira.
        </p>
        <div className="hero-cta">
          <a href="https://valentir.org/releases/standwise/Standwise-Setup-1.0.0.exe" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            Download Standwise v1.0.0
          </a>
          <a href="#how-it-works" className="btn btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1.05rem' }}>
            Explore Architecture
          </a>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Installer: <code>Standwise-Setup-1.0.0.exe</code> • SHA256 Verified: <code>970BB027...CAE4</code>
        </div>
      </section>

      {/* Interactive Hero Study */}
      <StandupTimelineStudioDemo />

      {/* Core Features */}
      <section id="features" style={{ margin: '6rem 0' }}>
        <h2 className="section-title">Engineered for Focused Software Developers</h2>
        <p className="section-desc">
          Your standup report shouldn&apos;t require twenty minutes of diary bookkeeping. 
          Standwise does the retrospection automatically right on your local PC.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌳</div>
            <h3 className="feature-title">Local Git Activity Correlator</h3>
            <p className="feature-text">
              Monitors working trees across any folder you authorize. Automatically registers commit logs, branch creations, merged pull requests, and commit diff stats without cloud permissions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Confidentiality &amp; Client Scrubbing</h3>
            <p className="feature-text">
              Working across sensitive enterprise repos or multi-client contracts? Toggle automatic regex masking to scrub NDA project names, secret branch identifiers, or internal URLs before exporting.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Zero Cloud &amp; Zero Tracking</h3>
            <p className="feature-text">
              Standwise operates 100% offline. No servers, no tracking telemetry, no enterprise surveillance bots. All activities are saved to an encrypted local SQLite database under your Windows user profile.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3 className="feature-title">Multi-Format Synthesizer</h3>
            <p className="feature-text">
              Instantly export in whatever format your engineering organization prefers: Slack block quotes, GitHub/GitLab markdown checklists, or concise executive bullet summaries.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3 className="feature-title">Editor Focus Heatmap</h3>
            <p className="feature-text">
              Uses lightweight Windows UI Automation hooks to measure active editor time (VS Code, Visual Studio, JetBrains) without logging keystrokes or recording sensitive screen contents.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Sub-Millisecond System Tray Daemon</h3>
            <p className="feature-text">
              Written to consume less than 18MB RAM in background state. Wake it with a custom global hotkey (default: Win+Alt+S) to view your daily activity cards immediately.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ margin: '6rem 0', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '1rem', padding: '3.5rem 2.5rem' }}>
        <h2 className="section-title">How Standwise Works</h2>
        <p className="section-desc">A frictionless 3-step loop that runs entirely on your local machine.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '0.75rem' }}>01</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Select Code Repositories</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Point Standwise to your <code>~/Projects</code> or code directories. Standwise registers file system watchers for <code>.git/logs/HEAD</code>.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '0.75rem' }}>02</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Code In Peace</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Work normally. Standwise silently aggregates git events, test runs, and editor focus intervals in local SQLite with zero CPU overhead.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.75rem', marginBottom: '0.75rem' }}>03</div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Copy Your Standup</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Press Win+Alt+S during your morning meeting. Click &ldquo;Copy Slack Format&rdquo; and paste your accurate, detailed standup in under 2 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" style={{ margin: '6rem 0' }}>
        <h2 className="section-title">Local-First Architecture &amp; Privacy</h2>
        <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '0.75rem', padding: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7 }}>
          <div style={{ color: '#38bdf8', fontWeight: 700, marginBottom: '0.5rem' }}>// Standwise Security &amp; Storage Guarantees</div>
          <div>1. STORAGE: %LOCALAPPDATA%\Valentir\Standwise\journal.db (AES-256 local encrypted SQLite)</div>
          <div>2. TELEMETRY: Disabled permanently. No analytics, tracking pixels, or phone-home requests.</div>
          <div>3. KEYLOGGING: Explicitly excluded. Standwise never records keystrokes, clipboard buffers, or audio.</div>
          <div>4. GIT ACCESS: Read-only access to local repository commit refs and reflog indices.</div>
        </div>
      </section>
    </div>
  );
}
