const Footer = () => {
  return (
    <footer style={styles.footer}>
      <span>© 2025 TorServ</span>
      <div>
        <a
          href="https://github.com/torserv/torserv"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Inspect the TorServ code
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/torserv/torserv-web"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View website source
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e1e',
    borderTop: '1px solid #333',
    color: '#aaa',
    fontSize: '0.9rem',
    marginTop: '2rem',
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
};

export default Footer;
