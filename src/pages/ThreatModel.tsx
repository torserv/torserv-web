import TorServStructuredData from '../components/TorServStructuredData';
import MirrorBadge from '../components/MirrorBadge';

const ThreatModel = () => (
  <>
    <TorServStructuredData />
    <section style={styles.card}>
      <div style={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={styles.heading}>🛡️ Threat Model: What TorServ Protects (and Doesn’t)</h2>
          <MirrorBadge />
        </div>
        <p style={styles.paragraph}>
          TorServ is built for environments where privacy is not just important — it’s essential. This page outlines the tool’s threat model: what it protects against, what it doesn’t, and how to use it safely. As a zero-configuration Tor web server, TorServ enables static site hosting with maximum anonymity and zero setup.
        </p>

        <h3 style={styles.subheading}>✅ What TorServ Defends Against</h3>
        <ul style={styles.list}>
          <li><strong>IP Exposure:</strong> TorServ binds only to <code>127.0.0.1</code>, never to a public network interface.</li>
          <li><strong>Clearnet Leaks:</strong> No outbound connections. No analytics. No third-party scripts or assets.</li>
          <li><strong>Metadata Leakage:</strong> JPEG, PNG, GIF and BMP metadata is scrubbed before delivery.</li>
          <li><strong>Path Disclosure:</strong> Encrypted URLs prevent human-readable file names/paths from being exposed.</li>
          <li><strong>Header Fingerprinting:</strong> Server strips headers like <code>Date</code>, <code>ETag</code>, <code>User-Agent</code>.</li>
          <li><strong>Traffic Analysis Resistance:</strong> Adds timing jitter (50–200ms) and response padding to mask content size and access patterns.</li>
          <li><strong>Bot Trap:</strong> Scanning for non existent directories or files will be fed a slow trickle of garbage instead of getting 404.</li>
          <li><strong>Fail Safe:</strong> Server won't run if dangerous file types are present in the <code>public/</code> directory.</li>
          <li><strong>Automatic Sandboxing:</strong> If Firejail is installed, TorServ will launch inside a lightweight sandbox. Use <code>--no-firejail</code> to disable.</li>
        </ul>

        <p style={styles.paragraph}>
          These defenses are built in by default. No configuration is needed. TorServ assumes the user may be non-technical and aims to be safe out of the box.
        </p>

        <h3 style={styles.subheading}>⚠️ What TorServ Does NOT Protect Against</h3>
        <ul style={styles.list}>
          <li><strong>Endpoint Compromise:</strong> If your machine is compromised by malware, all bets are off.</li>
          <li><strong>Content-based De-anonymization:</strong> If you host personal information, it can still expose you regardless of TorServ's protections.</li>
          <li><strong>JavaScript Risks:</strong> While TorServ serves no JS, adding your own scripts could introduce tracking or fingerprinting vulnerabilities.</li>
          <li><strong>Global Adversaries:</strong> TorServ does not protect against end-to-end timing correlation by actors like intelligence agencies.</li>
          <li><strong>Misconfigured Use:</strong> Editing files in ways that reintroduce metadata or clearnet links bypasses the protections TorServ offers.</li>
        </ul>

        <p style={styles.paragraph}>
          TorServ is a tool — not a guarantee. Privacy depends on operational security. This project minimizes risk, but users must still exercise caution.
        </p>

        <h3 style={styles.subheading}>🔍 Summary</h3>
        <p style={styles.paragraph}>
          TorServ is ideal for people who need fast, anonymous publishing without technical hurdles. It’s safe by default, avoids clearnet exposure, and minimizes fingerprinting. But it does not protect you from mistakes in content, insecure endpoints, or state-level surveillance.
        </p>

        <p style={styles.paragraph}>
          Use Tor Browser. Avoid uploading sensitive personal content. And when in doubt, don’t trust — verify.
        </p>

        <p style={styles.paragraph}>— The TorServ Project</p>
      </div>
    </section>
  </>
);

const styles = {
  card: {
    width: '65%',
    backgroundColor: '#1c1c1c',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    margin: '2rem auto',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  paragraph: {
    marginBottom: '0.75rem',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    paddingBottom: '0.4rem',
    borderBottom: '2px solid transparent',
    backgroundImage: 'linear-gradient(to right, #4ea1ff 0%, transparent 65%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '100% 2px',
    color: '#fff',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '0.75rem',
    paddingBottom: '0.25rem',
    borderBottom: '2px solid transparent',
    backgroundImage: 'linear-gradient(to right, #4ea1ff 0%, transparent 65%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '100% 2px',
    color: '#ddd',
  },
  list: {
    paddingLeft: '1.5rem',
    marginBottom: '1rem',
  },
};

export default ThreatModel;
