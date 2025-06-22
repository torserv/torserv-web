import { useEffect, useState } from 'react';

type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

const DownloadButtons = () => {
  const [linuxUrl, setLinuxUrl] = useState<string | null>(null);
  const [rpiUrl, setRpiUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/torserv/torserv/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        const assets: ReleaseAsset[] = data.assets;
        const linux = assets.find((a) => a.name === 'torserv-linux-amd64.zip');
        const rpi = assets.find((a) => a.name === 'torserv-rpi-arm64.zip');
        if (linux) setLinuxUrl(linux.browser_download_url);
        if (rpi) setRpiUrl(rpi.browser_download_url);
      })
      .catch(console.error);
  }, []);

    return (
    <div style={styles.frame}>
        <span style={styles.label}>Download:</span>
        <div style={styles.buttonGroup}>
        {linuxUrl && (
            <a
            href={linuxUrl}
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            Linux
            </a>
        )}
        {rpiUrl && (
            <a
            href={rpiUrl}
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            RPi
            </a>
        )}
        </div>
    </div>
    );
};

const styles = {
    frame: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    border: '1px solid #444',
    borderRadius: '6px',
    padding: '0.6rem 1rem',
    backgroundColor: '#2a2a2a',
    marginLeft: 'auto',
    gap: '0.75rem',
    },
  label: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginBottom: '0.4rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
  },
    button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: '#3a3a3a',
    border: '1px solid #666',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'background 0.3s, transform 0.2s',
    },
};

export default DownloadButtons;
