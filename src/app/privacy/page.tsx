
export const metadata = {
  title: 'Privacy Policy - Standwise',
};

export default function Page() {
  return (
    <div className="container">
      <div className="legal-content">
        
      <h1>Standwise Privacy Policy</h1>
      <p>Last updated: October 2026</p>
      <h2>1. Our Zero-Cloud Commitment</h2>
      <p>Standwise was designed specifically for developers and companies who cannot permit third-party cloud tools to inspect their proprietary source code, commits, or workflow schedules. All data logged or synthesized by Standwise remains on your local hardware.</p>
      <h2>2. What Standwise Does NOT Collect</h2>
      <p>Standwise does not collect, transmit, or store on any remote server:</p>
      <ul>
        <li>Your source code, file contents, or proprietary algorithms.</li>
        <li>Your git commit messages, author names, or branch names.</li>
        <li>Your keystrokes, keyboard typing patterns, or clipboard contents.</li>
        <li>Your personal identity, IP address, or network activity.</li>
      </ul>
      <h2>3. Local Storage</h2>
      <p>All activity logs are saved into a local SQLite database stored in your Windows user profile folder. You may delete this database file at any time with zero repercussions.</p>
    
      </div>
    </div>
  );
}
