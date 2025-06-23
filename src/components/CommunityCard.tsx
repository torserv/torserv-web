const CommunityCard = () => (
  <section style={styles.card}>
    <h2 style={styles.heading}>💬 Join the Discussion</h2>

    <p style={styles.paragraph}>
      Have ideas? Questions? Concerns? Whether you're a privacy expert or just Tor-curious, your input matters.
    </p>

    <p style={styles.paragraph}>
      👉{' '}
      <a
        href="https://github.com/torserv/torserv/discussions"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Join the discussions
      </a>{' '}
      and help steer TorServ in the right direction — no question is too small, all feedback is welcome and encouraged.
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
    fontSize: '1.75rem', // larger h2
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.125rem', // larger body
    marginBottom: '1.5rem',
    lineHeight: 1.7,
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default CommunityCard;
