const InstallCard = () => (
  <section style={styles.card}>
    <h2 style={styles.heading}>💻 Installation & Usage</h2>

    <h3 style={styles.subheading}>🐧 Linux (x86_64)</h3>
    <pre style={styles.code}>
      unzip torserv-linux-amd64.zip{'\n'}
      cd TorServ{'\n'}
      ./torserv
    </pre>

    <h3 style={styles.subheading}>🍓 Raspberry Pi (ARM64)</h3>
    <pre style={styles.code}>
      unzip torserv-rpi-arm64.zip{'\n'}
      cd TorServ{'\n'}
      ./torserv
    </pre>

    <p style={styles.paragraph}>
      The Tor hidden service will start and print a <code>.onion</code> address to the terminal. Use{' '}
      <a
        href="https://www.torproject.org/download/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Tor Browser
      </a>{' '}
      to access it.
    </p>

    <h3 style={styles.subheading}>🚫 Windows</h3>
    <p style={styles.paragraph}>
      ⚠️ Note: Windows release dropped due to aggressive antivirus false positives. You may still build from source if needed.
    </p>
  </section>
);

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
  subheading: {
    fontSize: '1.25rem', // upgraded from 1.1rem
    margin: '1rem 0 0.5rem',
  },
  paragraph: {
    fontSize: '1.125rem', // upgraded for body text
    marginBottom: '1.5rem',
    lineHeight: 1.7,
  },
  code: {
    backgroundColor: '#2a2a2a',
    padding: '0.75rem',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '1.05rem', // slightly larger for readability
    whiteSpace: 'pre-wrap' as const,
    marginBottom: '1.25rem',
    lineHeight: 1.6,
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
};

export default InstallCard;
