import DownloadButtons from './DownloadButtons';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.inner}>
      <div style={styles.logoRow}>
        <img src="/onion-small.png" alt="TorServ logo" style={styles.logo} />
        <h1 style={styles.title}>TorServ</h1>
      </div>
      <div style={styles.rightSide}>
        <DownloadButtons />
      </div>
    </div>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#1e1e1e',
    padding: '1rem 2rem',
    borderBottom: '1px solid #333',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    height: '110px',
    boxSizing: 'border-box' as const,
    width: '100%',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    color: '#fff',
  },
  logo: {
    height: '75px',
    width: 'auto',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
};

export default Header;
