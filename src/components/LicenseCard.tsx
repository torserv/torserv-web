const LicenseCard = () => (
  <section style={styles.card}>
    <h2 style={styles.heading}>📝 License</h2>
    <p style={styles.paragraph}>
      TorServ is licensed under the permissive{' '}
    <a
      href="https://github.com/torserv/torserv/blob/main/LICENSE"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.link}
    >
      MIT License
    </a>
    </p>
    <p style={styles.paragraph}>
      This software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors be liable for any claim, damages, or other liability.
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
  paragraph: {
    fontSize: '1.125rem', // bigger body text
    marginBottom: '1.5rem',
    lineHeight: 1.7,
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
};

export default LicenseCard;
