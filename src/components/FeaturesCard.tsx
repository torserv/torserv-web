import { useState } from 'react';

type Feature = {
  emoji: string;
  title: string;
  summary: string;
  details: string;
};

const featureGroups: { heading: string; items: Feature[] }[] = [
  {
    heading: 'Security',
    items: [
      {
        emoji: '🔐',
        title: 'Metadata Hardening',
        summary: 'Scrubs headers & timestamps to minimize fingerprinting.',
        details: 'All date/time headers and metadata are normalized so that every request looks identical, mitigating tracking and identification attacks.'
      },
      {
        emoji: '⏱️',
        title: 'Timing Attack Resistance',
        summary: 'Uniform response timing to resist leak-based attacks.',
        details: 'TorServ internally adds random delays and consistent response pacing to avoid timing patterns that could be used to link sessions or users.'
      },
      {
        emoji: '🔒',
        title: 'Firejail Sandboxing',
        summary: 'Runs in a secure sandbox when Firejail is present.',
        details: 'If Firejail is installed on the system, TorServ automatically launches inside a security sandbox that limits filesystem, network, and system access — adding a second layer of containment.'
      }
    ]
  },
  {
    heading: 'Usability',
    items: [
      {
        emoji: '🧰',
        title: 'Zero Configuration',
        summary: 'Unzip and run—no setup or flags needed.',
        details: 'Simply extract the archive and execute the binary. TorServ handles network, Tor setup, and file serving automatically.'
      },
      {
        emoji: '🌐',
        title: 'Multilingual Landing Page',
        summary: 'Built‑in Tor safety tips in multiple languages.',
        details: 'Visitors land on a default page offering safety advice and guidance, automatically displayed in their language if supported.'
      }
    ],
  },
  {
    heading: 'Portability',
    items: [
      {
        emoji: '🚀',
        title: 'Instant Tor Hosting',
        summary: 'Bundled Tor daemon auto‑launches a .onion service.',
        details: 'TorServ includes everything needed — no separate Tor install required, and it serves your content anonymously right away.'
      },
      {
        emoji: '💾',
        title: 'Static File Server',
        summary: 'Securely serve .html, images, text, zines, etc.',
        details: 'Focuses purely on static content—zero CGI, zero scripting—which minimizes attack surface and keeps your project safe.'
      },
      {
        emoji: '🛠️',
        title: 'Cross‑Platform Binaries',
        summary: 'Linux x86_64 + ARM (Raspberry Pi) prebuilt releases.',
        details: 'Grabs a precompiled binary for your architecture—no need to build from source unless you want to tweak advanced settings.'
      }
    ],
  },
  {
    heading: 'Legal',
    items: [
      {
        emoji: '📜',
        title: 'MIT Licensed',
        summary: 'Open‑source and permissive—use it anywhere.',
        details: 'Allows personal, commercial, and closed‑source use. Provided “as is”, with no warranty—check full disclaimer in the license section.'
      }
    ],
  }
];

const FeaturesCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={styles.card}>
      <h2 style={styles.heading}>🚀 Key Features</h2>
      {featureGroups.map((grp, g) => (
        <div key={grp.heading}>
          <h3 style={styles.groupHeading}>{grp.heading}</h3>
          <ul style={styles.list}>
            {grp.items.map((f, i) => {
              const idx = g * 10 + i;
              const isOpen = openIndex === idx;
              return (
                <li key={idx} className="feature-item" style={{ backgroundColor: idx % 2 === 0 ? '#1e1e1e' : '#212121' }}>

                  <div style={styles.itemHeader} onClick={() => setOpenIndex(isOpen ? null : idx)}>
                    <span style={styles.emoji}>{f.emoji}</span>
                    <strong>{f.title}</strong>
                    <span style={styles.summary}>{f.summary}</span>
                    <span style={styles.toggle}>{isOpen ? '▼' : '▶'}</span>
                  </div>
                  {isOpen && <p style={styles.details}>{f.details}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

const styles = {
  card: {
    width: '65%',
    backgroundColor: '#1c1c1c',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    position: 'relative' as const,
    paddingBottom: '0.4rem',
    borderBottom: '2px solid transparent',
    backgroundImage: 'linear-gradient(to right, #4ea1ff 0%, transparent 65%)',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 2px',
  },
  groupHeading: {
    fontSize: '1.25rem', // Subheading size
    color: '#aaa',
    margin: '1rem 0 0.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.2s',
  },
  itemHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  emoji: {
    fontSize: '1.4rem', // more visual impact
  },
  summary: {
    flex: 1,
    marginLeft: '0.5rem',
    color: '#ddd',
    fontSize: '1.125rem', // upgraded from 0.975rem
  },
  toggle: {
    marginLeft: '0.5rem',
    color: '#888',
    fontSize: '1rem', // bumped slightly
  },
  details: {
    marginTop: '0.5rem',
    fontSize: '1.1rem', // upgraded from 0.9rem
    color: '#aaa',
    lineHeight: 1.7,
  },
};

export default FeaturesCard;
