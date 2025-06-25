import React from 'react';

const NotFound = () => (
  <div style={styles.page}>
    <header style={styles.header}>
      <img src="/onion-small.png" alt="TorServ logo" style={styles.logo} />
      <h1 style={styles.title}>TorServ</h1>
    </header>

    <main style={styles.main}>
      <h2 style={styles.heading}>404 – This Onion’s Gone Missing</h2>
      <p style={styles.paragraph}>
        The page you're looking for doesn't exist or has vanished into the Tor ether.
      </p>
      <a href="/" style={styles.button}>Return to Home</a>
    </main>
  </div>
);

const styles = {
  page: {
    margin: 0,
    fontFamily: 'sans-serif',
    background: '#121212',
    color: '#ddd',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 2rem',
    background: '#1e1e1e',
    width: '100%',
    borderBottom: '1px solid #333',
  },
  logo: {
    height: '50px',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
    color: '#fff',
  },
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    padding: '2rem',
  },
  heading: {
    fontSize: '2rem',
    margin: '1.5rem 0 1rem',
  },
  paragraph: {
    margin: '0 0 2rem',
    lineHeight: 1.5,
  },
  button: {
    background: '#3a3a3a',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: '1px solid #666',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
    transition: 'background 0.3s',
  } as React.CSSProperties,
};

export default NotFound;
