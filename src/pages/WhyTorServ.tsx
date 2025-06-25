const WhyTorServ = () => (
  <section style={styles.card}>
    <div style={styles.content}>
      <h2 style={styles.heading}>🛠️ Why I Built TorServ</h2>

      <p style={styles.paragraph}><strong>TorServ</strong> was built because I couldn’t believe it didn’t already exist.</p>

      <p style={styles.paragraph}>
        I wanted to self-host a basic website — anonymously, as a Tor hidden service — and I assumed there would be a dead-simple tool for that. Something where you unzip, run, and instantly get a .onion address without configuring a web server, opening ports, or writing a torrc file.
      </p>

      <p style={styles.paragraph}>
        There wasn’t. And for most people, setting up a Tor hidden service is technically daunting — even for experienced sysadmins. For those without technical backgrounds, it’s close to impossible.
      </p>

      <h3 style={styles.subheading}>🗣️ A Tool for People Who Can’t Speak Freely</h3>

      <p style={styles.paragraph}>
        <strong>TorServ isn’t just for tinkerers or developers — it’s for anyone who needs to publish freely in high-risk environments.</strong>
      </p>

      <p style={styles.paragraph}>
        That includes journalists, whistleblowers, and activists who face real punishment — or worse — simply for telling the truth. My vision is simple: <em>freedom of speech for everyone on earth</em>. It’s a fundamental human right.
      </p>

      <p style={styles.paragraph}>
        TorServ was built to make anonymous publishing more accessible. No config. No clearnet. No servers to rent. You just unzip and run it locally — and your Tor hidden service appears automatically.
      </p>

      <h3 style={styles.subheading}>🔍 No Existing Solutions</h3>

      <p style={styles.paragraph}>
        When I searched, I expected to find something like this. But there was nothing. Not even a minimal script. It felt like inventing the spoon — obvious in hindsight, but strangely absent. So I wrote one.
      </p>

      <h3 style={styles.subheading}>🛡️ Privacy by Default</h3>

      <p style={styles.paragraph}>
        I don’t claim to be a security expert. But I tried to build TorServ with smart defaults that assume compromise, not safety. Some of the features I included:
      </p>

      <ul style={styles.list}>
        <li>Fingerprint and timing attack resistance</li>
        <li>Encrypted filenames in the HTML</li>
        <li>Response padding and header sanitization</li>
        <li>No JS, no tracking, no outbound traffic — ever</li>
      </ul>

      <p style={styles.paragraph}>
        These ideas aren’t perfect, but they’re a start. And I welcome all feedback, audits, and improvements from the privacy and security community.
      </p>

      <h3 style={styles.subheading}>🌍 Open Source and Community-Led</h3>

      <p style={styles.paragraph}>
        TorServ is open source under the MIT License. I hope others will contribute — through code, translations, documentation, or simply ideas. It’s very much a work in progress, and I’m listening to the community to guide what comes next.
      </p>

      <p style={styles.paragraph}>
        If you want to see the code, suggest a feature, or report a concern, visit the GitHub repo:
      </p>

      <p style={styles.paragraph}>
        <a href="https://github.com/torserv/torserv" style={styles.link}>https://github.com/torserv/torserv</a>
      </p>

      <p style={styles.paragraph}>Thank you to everyone using Tor, building tools for the dark web, and defending digital privacy. This is my small contribution to that effort.</p>

      <p style={styles.paragraph}>— The TorServ Creator</p>
    </div>
  </section>
);

const styles = {
  card: {
    width: '65%',
    backgroundColor: '#1c1c1c',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    margin: '2rem auto',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  paragraph: {
    marginBottom: '0.75rem',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    paddingBottom: '0.4rem',
    borderBottom: '2px solid transparent',
    backgroundImage: 'linear-gradient(to right, #4ea1ff 0%, transparent 65%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '100% 2px',
    color: '#fff',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1 rem',
    paddingBottom: '0.25rem',
    borderBottom: '2px solid transparent',
    backgroundImage: 'linear-gradient(to right, #4ea1ff 0%, transparent 65%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '100% 2px',
    color: '#ddd',
  },
  list: {
    paddingLeft: '1.5rem',
  },
  link: {
    color: '#4ea1ff',
    textDecoration: 'none',
  },
};

export default WhyTorServ;
