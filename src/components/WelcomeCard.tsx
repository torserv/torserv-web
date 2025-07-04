import MirrorBadge from './MirrorBadge';

const WelcomeCard = () => (
  <section style={styles.card}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ flexGrow: 1 }}>
        <h2 style={styles.heading}>🧅 Welcome to TorServ</h2>
      </div>
      <MirrorBadge />
    </div>

    <div style={styles.text}>
      <p style={styles.p}>
        <strong>TorServ</strong> is a zero-configuration static web server that instantly launches as a Tor hidden service — no setup, no dependencies, just unzip and run. It's built for those who need anonymous, censorship-resistant hosting in privacy-critical or high-risk environments.
      </p>

      <p style={styles.p}>
        Designed with simplicity and security in mind, TorServ comes bundled with hardened defaults, integrated Tor routing, and a multilingual landing page to help visitors stay safe on the dark web. Whether you're a journalist, whistleblower, activist, or just privacy-conscious — TorServ is ready out of the box.
      </p>

      <p style={styles.p}>
        Development updates are shared via{' '}
        <a
          href="https://twitter.com/TorServ1"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          @TorServ1
        </a>.
      </p>

      <p style={styles.p}>
        TorServ is fully open source and actively maintained on{' '}
        <a
          href="https://github.com/torserv/torserv"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>. Inspect the code, contribute, or star the project to support privacy-first tech.
      </p>

      
    </div>

    <div style={styles.imageWrapper}>
      <img src="/Screenshot.jpg" alt="TorServ screenshot" style={styles.image} />
    </div>
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
  row: {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap' as const,
  },
  text: {
    flex: 1,
    minWidth: '250px',
  },
  p: {
    fontSize: '1.125rem', // larger body
    marginBottom: '1.5rem',
    lineHeight: 1.7,
    display: 'block',
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
  imageWrapper: {
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    padding: '0.5rem',
    borderRadius: '6px',
    boxShadow: '0 0 12px rgba(0, 0, 0, 0.5)',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  image: {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
};

export default WelcomeCard;
