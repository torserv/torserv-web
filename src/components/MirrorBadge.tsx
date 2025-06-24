import { useEffect, useState } from 'react';

const MirrorBadge = () => {
  const [isOnion, setIsOnion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnion(window.location.hostname.endsWith('.onion'));
    }
  }, []);

  return (
    <span style={{ ...styles.badge, backgroundColor: isOnion ? '#6b4fc6' : '#4ea1ff' }}>
      {isOnion ? 'Tor mirror' : 'Clearnet version'}
    </span>
  );
};

const styles = {
  badge: {
    display: 'inline-block',
    padding: '0.3rem 0.7rem',
    borderRadius: '999px',
    fontSize: '0.75rem',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
};

export default MirrorBadge;
