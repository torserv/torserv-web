const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        © 2025 TorServ
        <div style={{ fontSize: '0.85em', color: '#aaa', marginTop: '0.3rem' }}>
          This site is a React app served by NGINX, not by the TorServ binary.
        </div>
      </div>
      <div style={styles.right}>
        <div style={styles.links}>
          <a
            href="https://github.com/torserv/torserv"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Inspect server code
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/torserv/torserv-web"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View this website's source
          </a>
        </div>
        <div style={styles.onion}>
          Tor mirror: <code>http://inacxweo5cotzc6mshwq52eul4327ac64xz5q5s4bml62txqot727oyd.onion</code>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e1e',
    borderTop: '1px solid #333',
    color: '#aaa',
    fontSize: '0.9rem',
    marginTop: '2rem',
    flexWrap: 'wrap' as const,
  },
  left: {
    flex: '0 1 auto',
  },
  right: {
    flex: '1 1 auto',
    textAlign: 'right' as const,
  },
  links: {
    marginBottom: '0.25rem',
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
  onion: {
    fontSize: '0.85rem',
    color: '#888',
    wordBreak: 'break-all' as const,
  },
};

export default Footer;
