import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Standwise | Automated Daily Standups & Async Engineering Journals',
  description: 'Zero-cloud, privacy-first local work journal daemon for Windows. Standwise gathers your git commits, terminal tasks, and active code editor focus into structured daily standups with zero effort.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <div className="brand-icon">S</div>
              <span>Standwise</span>
            </Link>
            <nav className="nav-links">
              <Link href="/#features" className="nav-link">Features</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/#architecture" className="nav-link">Architecture</Link>
              <Link href="/support" className="nav-link">Support</Link>
            </nav>
            <a href="https://valentir.org/releases/standwise/Standwise-Setup-1.0.0.exe" className="btn btn-primary">
              Download for Windows
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="brand" style={{ marginBottom: '1rem' }}>
                  <div className="brand-icon">S</div>
                  <span>Standwise</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Offline-first engineering standup generator. Stop struggling to recall what you built yesterday.
                </p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li><Link href="/#features">Features</Link></li>
                  <li><Link href="/#how-it-works">How It Works</Link></li>
                  <li><a href="https://valentir.org/releases/standwise/Standwise-Setup-1.0.0.exe">Download v1.0.0</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Legal & Privacy</h4>
                <ul>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                  <li><Link href="/eula">EULA</Link></li>
                  <li><Link href="/acceptable-use">Acceptable Use</Link></li>
                  <li><Link href="/refunds">Refund Policy</Link></li>
                  <li><Link href="/third-party-notices">Third-Party Notices</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <ul>
                  <li><Link href="/support">Help & Documentation</Link></li>
                  <li><a href="mailto:support@valentir.org">support@valentir.org</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div>© 2026 Valentir Software Inc. Standwise is a trademark of Valentir.</div>
              <div>100% Offline • Zero Telemetry • Local SQLite Journal</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
