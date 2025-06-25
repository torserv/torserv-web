import DownloadButtons from './DownloadButtons';
import Nav from './Nav';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.row}>
      <div style={styles.left}>
        <img src="/onion-small.png" alt="TorServ logo" style={styles.logo} />
        <h1 style={styles.title}>TorServ</h1>
      </div>
      <div style={styles.center}>
        <Nav />
      </div>
      <div style={styles.right}>
        <DownloadButtons />
      </div>
    </div>
  </header>
);

const styles = {
  header: {
    backgroundColor: '#1e1e1e',
    borderBottom: '1px solid #333',
    padding: '1rem 2rem',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    width: '100%',
    height: '110px',
    boxSizing: 'border-box' as const,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: '1 1 30%',
    minWidth: '200px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 40%',
    minWidth: '150px',
    textAlign: 'center' as const,
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: '1 1 30%',
    minWidth: '200px',
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
};

export default Header;
