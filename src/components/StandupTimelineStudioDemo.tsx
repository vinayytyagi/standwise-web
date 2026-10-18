'use client';

import React, { useState } from 'react';

interface ActivityItem {
  id: string;
  time: string;
  category: 'git' | 'editor' | 'terminal' | 'pr';
  title: string;
  repo: string;
  branch: string;
  summary: string;
}

const SAMPLE_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    time: '09:15 AM',
    category: 'git',
    title: 'commit 89b4f2a',
    repo: 'client-core-api',
    branch: 'feat/auth-pkce',
    summary: 'Implement PKCE flow for desktop Windows client callback'
  },
  {
    id: '2',
    time: '11:40 AM',
    category: 'terminal',
    title: 'pnpm test:e2e',
    repo: 'client-core-api',
    branch: 'feat/auth-pkce',
    summary: 'Ran 48 Playwright test scenarios; 48 passed, 0 failed'
  },
  {
    id: '3',
    time: '02:20 PM',
    category: 'editor',
    title: 'VS Code active focus (2h 15m)',
    repo: 'billing-service',
    branch: 'fix/invoice-hsn-rounding',
    summary: 'Refactored currency roundoff in GST invoice calculation engine'
  },
  {
    id: '4',
    time: '04:45 PM',
    category: 'git',
    title: 'commit 3f191a0',
    repo: 'billing-service',
    branch: 'fix/invoice-hsn-rounding',
    summary: 'Add unit tests for split IGST vs CGST/SGST rounding rules'
  },
  {
    id: '5',
    time: '05:30 PM',
    category: 'pr',
    title: 'PR #142 opened for review',
    repo: 'billing-service',
    branch: 'fix/invoice-hsn-rounding',
    summary: 'Ready for tech lead review with benchmark test coverage'
  }
];

export default function StandupTimelineStudioDemo() {
  const [activities] = useState<ActivityItem[]>(SAMPLE_ACTIVITIES);
  const [confidentialMask, setConfidentialMask] = useState(false);
  const [outputFormat, setOutputFormat] = useState<'slack' | 'markdown' | 'bullet'>('slack');
  const [copied, setCopied] = useState(false);

  const getStandupText = () => {
    const mask = (name: string) => confidentialMask ? name.replace(/[a-zA-Z0-9]/g, '•') : name;
    
    if (outputFormat === 'slack') {
      return "*Yesterday / Today Standup:*\n" +
        "• *Authentication:* Completed PKCE desktop flow in `" + mask('client-core-api') + "` (verified 48 E2E test passes).\n" +
        "• *Invoicing:* Resolved HSN rounding disparity in `" + mask('billing-service') + "` and opened PR #142 with unit test suites.\n" +
        "• *Blockers:* None. Waiting on code review for PR #142.";
    }

    if (outputFormat === 'markdown') {
      return "### Standup Update\n**Completed:**\n" +
        "- [x] Implemented PKCE callback handler in `" + mask('client-core-api') + "`\n" +
        "- [x] Passed 48 end-to-end regression tests\n" +
        "- [x] Fixed GST invoice rounding calculations in `" + mask('billing-service') + "`\n" +
        "- [x] Submitted PR #142\n\n**Blockers:**\n- None";
    }

    return "• Authentication PKCE flow finished in " + mask('client-core-api') + " with 48/48 tests\n" +
      "• Invoicing HSN rounding bug fixed in " + mask('billing-service') + ", PR #142 submitted\n" +
      "• Next up: Code review verification & deployment rollout";
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getStandupText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="interactive-demo">
      <div className="demo-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="demo-dots">
            <span className="demo-dot dot-red"></span>
            <span className="demo-dot dot-yellow"></span>
            <span className="demo-dot dot-green"></span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Standwise Local Engineering Activity Aggregator (Zero-Cloud Daemon)
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <input 
              type="checkbox" 
              checked={confidentialMask} 
              onChange={e => setConfidentialMask(e.target.checked)} 
            />
            Mask Confidential Repos
          </label>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '440px' }}>
        {/* Activity Stream */}
        <div style={{ padding: '1.5rem', borderRight: '1px solid var(--border-color)', background: 'rgba(15, 23, 42, 0.4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)' }}>
              Detected Local Work Log
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>5 activities today</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {activities.map((item) => (
              <div 
                key={item.id} 
                style={{
                  padding: '0.85rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.15rem 0.4rem',
                      borderRadius: '0.25rem',
                      background: item.category === 'git' ? 'rgba(56, 189, 248, 0.15)' : item.category === 'pr' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                      color: item.category === 'git' ? '#38bdf8' : item.category === 'pr' ? '#10b981' : '#f59e0b',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.title}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{item.time}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {item.summary}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  📂 {confidentialMask ? '••••••••' : item.repo} on <span style={{ color: 'var(--accent)' }}>{item.branch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Synthesized Standup Output */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(11, 17, 32, 0.8)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                Synthesized Standup
              </span>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {(['slack', 'markdown', 'bullet'] as const).map(fmt => (
                  <button
                    key={fmt}
                    onClick={() => setOutputFormat(fmt)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '0.25rem',
                      border: '1px solid',
                      borderColor: outputFormat === fmt ? 'var(--accent)' : 'var(--border-color)',
                      background: outputFormat === fmt ? 'var(--accent-light)' : 'transparent',
                      color: outputFormat === fmt ? 'var(--accent)' : 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    {fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <pre style={{
              background: 'var(--bg-primary)',
              padding: '1.25rem',
              borderRadius: '0.5rem',
              border: '1px solid var(--border-color)',
              color: '#f8fafc',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--font-mono)',
              minHeight: '230px'
            }}>
              {getStandupText()}
            </pre>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <button 
              onClick={handleCopy}
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              {copied ? '✓ Copied to Clipboard!' : '📋 Copy Standup to Clipboard'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
