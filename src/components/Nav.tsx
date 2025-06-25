import { Link } from 'react-router-dom';

const Nav = () => (
  <nav style={styles.nav}>
    <Link to="/" style={styles.link}>Home</Link>
    <span style={styles.separator}>|</span>
    <Link to="/why-torserv" style={styles.link}>Why TorServ?</Link>
    <span style={styles.separator}>|</span>
    <Link to="/howto-host" style={styles.link}>How To</Link>
  </nav>
);

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.85rem',
    color: '#aaa',
    marginTop: '0.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#aaa',
    transition: 'color 0.2s',
    fontWeight: 400,
    letterSpacing: '0.05em',
    margin: '0 0.5rem',
  } as React.CSSProperties,
  separator: {
    color: '#777',
  },
};

export default Nav;
