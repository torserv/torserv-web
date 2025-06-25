import TorServStructuredData from '../components/TorServStructuredData';
    <TorServStructuredData />

const HowToHost = () => (
<>        
  <TorServStructuredData />
  <section style={styles.card}>
    <div style={styles.content}>
      <h2 style={styles.heading}>⚡ Host a Static Website on the Dark Web in Under 1 Minute</h2>

      <p style={styles.paragraph}>
        Hosting a Tor hidden service — also known as an <strong>onion site</strong> — usually requires deep technical knowledge. But with <strong>TorServ</strong>, you can launch a fully anonymous, censorship-resistant website in seconds.
      </p>

      <p style={styles.paragraph}>
        This guide shows you how to go from zero to a live <code>.onion</code> site using just three commands. Unzip, change into the TorServ/ directory and run, it is that sinple. See the hopme page for an example.
      </p>

      <h3 style={styles.subheading}>🌐 Why Host on the Dark Web?</h3>

      <p style={styles.paragraph}>Tor hidden services offer powerful advantages for people who need privacy and stealth:</p>

      <ul style={styles.list}>
        <li>Protect against surveillance and censorship</li>
        <li>Publish content anonymously</li>
        <li>Access websites without revealing your location or identity</li>
      </ul>

      <p style={styles.paragraph}>
        These benefits matter not just to privacy advocates, but also to journalists, activists, whistleblowers, and anyone living under authoritarian regimes.
      </p>

      <h3 style={styles.subheading}>🧰 The Traditional Way: Manual Tor Configuration</h3>

      <p style={styles.paragraph}>To set up a Tor hidden service the usual way, you’d typically need to:</p>

      <ul style={styles.list}>
        <li>Install and configure the Tor daemon</li>
        <li>Write a <code>torrc</code> file to define the service</li>
        <li>Setup and run a web server like nginx or Apache</li>
        <li>Ensure the server isn't leaking critical metadata</li>
        <li>Identify and mitigate attack surfaces</li>
        <li>Expose local ports correctly</li>
      </ul>

      <p style={styles.paragraph}>For most people — even experienced sysadmins — this is a slow, tedious process and mistakes are very easy to make, or attack vectors easy to overlook.</p>

      <h3 style={styles.subheading}>🚀 The Simple Way: TorServ</h3>

      <p style={styles.paragraph}><strong>TorServ</strong> removes all the complexity. You just unzip it and run:</p>

      <pre><code>./torserv</code></pre>

      <p style={styles.paragraph}>
        Within seconds, a Tor hidden service is generated and the <code>.onion</code> address is printed to your terminal. That’s it — your anonymous website is live.
      </p>

      <p style={styles.paragraph}>No configuration. No clearnet exposure. No system dependencies.</p>

      <h3 style={styles.subheading}>🔍 Behind the Scenes: How It Works</h3>

      <p style={styles.paragraph}>
        TorServ bundles the Tor binary internally and binds only to <code>127.0.0.1</code>. It serves static files from the local directory and launches a self-contained hidden service using raw TCP.
      </p>

      <p style={styles.paragraph}>
        It’s built in Go and supports Linux (x64) and Raspberry Pi (ARM). There’s no JavaScript, no tracking, and no outbound traffic of any kind.
      </p>

      <h3 style={styles.subheading}>🛡️ Security Features by Default</h3>

      <p style={styles.paragraph}>TorServ is designed for hostile environments where compromise is assumed. Key features include:</p>

      <ul style={styles.list}>
        <li>Header sanitization (removes identifying metadata)</li>
        <li>Encrypted filenames and obfuscated URLs</li>
        <li>Response padding to resist traffic analysis</li>
        <li>Timing jitter to confuse fingerprinting</li>
        <li>JPEG/PNG/GIF/WEBP metadata scrubbing</li>
        <li>No caching, logging, or outbound calls</li>
      </ul>

      <p style={styles.paragraph}>
        Even the default landing page is multilingual — with safety tips for TorServ users.
      </p>

      <h3 style={styles.subheading}>🧪 Try TorServ Today</h3>

      <p style={styles.paragraph}>You can download TorServ directly from GitHub and get started immediately:</p>

      <p style={styles.paragraph}>
        <a href="https://github.com/torserv/torserv" style={styles.link}>https://github.com/torserv/torserv</a>
      </p>

      <p style={styles.paragraph}>
        Installation requires no root access, no config files, and no clearnet interface. It’s the easiest way to host an anonymous Tor site, securely and privately.
      </p>

      <h3 style={styles.subheading}>🤝 Want to Contribute?</h3>

      <p style={styles.paragraph}>TorServ is open source under the MIT License. The project welcomes:</p>

      <ul style={styles.list}>
        <li>Security audits</li>
        <li>Bug reports</li>
        <li>Feature suggestions</li>
        <li>Language translations</li>
        <li>Financical support (This project incurs costs monthly to run)</li>

      </ul>

      <p style={styles.paragraph}>Your feedback and collaboration will help make TorServ safer and more accessible to everyone.</p>

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
