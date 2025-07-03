import TorServStructuredData from '../components/TorServStructuredData';
import MirrorBadge from '../components/MirrorBadge';

const HowToHost = () => (
<>        
  <TorServStructuredData />
 <section style={styles.card}>
  <div style={styles.content}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={styles.heading}>⚡ Host a Static Website on the Dark Web in Under 1 Minute</h2>
      <MirrorBadge />
    </div>

    <p style={styles.paragraph}>
      Hosting a <strong>Tor hidden service</strong> — also known as an <strong>onion site</strong> — typically requires in-depth technical skills and manual configuration. With <strong>TorServ</strong>, you can <strong>host a static website anonymously</strong> in seconds, without touching any config files.
    </p>

    <p style={styles.paragraph}>
      This guide shows how to go from zero to a live <code>.onion</code> site using just three commands. Unzip, change into the <code>TorServ/</code> directory, and run. That’s it. For an example, visit our home page.
    </p>

    <h3 style={styles.subheading}>🌐 Why Host a Site on the Dark Web?</h3>

    <p style={styles.paragraph}>
      <strong>Hosting a website on Tor</strong> allows you to resist censorship, avoid surveillance, and share information without revealing your identity.
    </p>

    <ul style={styles.list}>
      <li>Publish content privately and anonymously</li>
      <li>Bypass national firewalls and filtering</li>
      <li>Stay invisible to search engines and third parties</li>
    </ul>

    <p style={styles.paragraph}>
      These features make .onion hosting essential for journalists, activists, whistleblowers, and individuals in authoritarian regimes.
    </p>

    <h3 style={styles.subheading}>🧰 The Traditional Approach to Onion Hosting</h3>

    <p style={styles.paragraph}>Normally, creating a Tor hidden service involves:</p>

    <ul style={styles.list}>
      <li>Installing and configuring the Tor daemon</li>
      <li>Writing a <code>torrc</code> file with service definitions</li>
      <li>Deploying a web server like nginx or Apache</li>
      <li>Auditing for data leaks and fingerprinting vectors</li>
      <li>Securing exposed ports and metadata</li>
    </ul>

    <p style={styles.paragraph}>It’s tedious, error-prone, and difficult to maintain securely — especially for non-experts.</p>

    <h3 style={styles.subheading}>🚀 A Better Way: TorServ</h3>

    <p style={styles.paragraph}>
      <strong>TorServ</strong> makes <strong>anonymous static site hosting</strong> as easy as:
    </p>

    <pre><code>./torserv</code></pre>

    <p style={styles.paragraph}>
      The server prints your new <code>.onion</code> address and serves content instantly. No clearnet exposure, no setup, no dependencies.
    </p>

    <h3 style={styles.subheading}>🔍 What’s Under the Hood?</h3>

    <p style={styles.paragraph}>
      TorServ bundles the Tor binary, binds to <code>127.0.0.1</code>, and serves static content from the local directory. It creates a self-contained hidden service via raw TCP.
    </p>

    <p style={styles.paragraph}>
      Written in Go, TorServ supports Linux (x64) and Raspberry Pi (ARM). No tracking, no JavaScript, no network calls.
    </p>

    <h3 style={styles.subheading}>🛡️ Built-In Security Features</h3>

    <p style={styles.paragraph}>
      Designed for hostile networks and surveillance-heavy environments, TorServ includes:
    </p>

    <ul style={styles.list}>
      <li>Header sanitization and metadata stripping</li>
      <li>Encrypted and obfuscated URLs</li>
      <li>Traffic padding and randomized response timing</li>
      <li>Auto-scrubbing for JPEG, PNG, GIF, and BMP metadata</li>
      <li>No logging, no caching, no third-party contact</li>
    </ul>

    <p style={styles.paragraph}>
      The default landing page is multilingual and includes safety tips for first-time Tor users.
    </p>

    <h3 style={styles.subheading}>🧪 Try TorServ</h3>

    <p style={styles.paragraph}>
      Download TorServ from GitHub and <strong>host your own Tor site</strong> today:
    </p>

    <p style={styles.paragraph}>
      <a href="https://github.com/torserv/torserv" style={styles.link}>https://github.com/torserv/torserv</a>
    </p>

    <p style={styles.paragraph}>
      No root required. No clearnet interface. No setup headaches. Just anonymous hosting that works.
    </p>

    <h3 style={styles.subheading}>🤝 Want to Contribute?</h3>

    <p style={styles.paragraph}>
      TorServ is MIT-licensed and open to collaboration. You can help by:
    </p>

    <ul style={styles.list}>
      <li>Performing security audits</li>
      <li>Reporting bugs</li>
      <li>Suggesting new features</li>
      <li>Translating the landing page</li>
      <li>Supporting the project financially (to cover server and hosting costs)</li>
    </ul>

    <p style={styles.paragraph}>
      Every bit of help brings privacy-preserving hosting to more people.
    </p>

    <p style={styles.paragraph}>— The TorServ Project</p>
  </div>
</section>

</>
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
    marginBottom: '0.75rem',
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

export default HowToHost;
