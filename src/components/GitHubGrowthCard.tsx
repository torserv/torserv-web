import { useEffect, useState } from 'react';

type RepoStats = {
  stars: number;
  createdAt: string;
  starsPerDay: number;
};

const GitHubGrowthCard = () => {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/torserv/torserv')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed');
        return res.json();
      })
      .then((data) => {
        const created = new Date(data.created_at);
        const now = new Date();
        const daysOld = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
        const stars = data.stargazers_count;
        const starsPerDay = stars / daysOld;

        setStats({
          stars,
          createdAt: created.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          starsPerDay: parseFloat(starsPerDay.toFixed(2)),
        });
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>GitHub Growth</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : stats ? (
        <div style={styles.statsRow}>
          <span>⭐ {stats.stars} stars</span>
          <span>📅 Created: {stats.createdAt}</span>
          <span>📈 ~{stats.starsPerDay} stars/day</span>
        </div>
      ) : (
        <p>Loading GitHub stats...</p>
      )}
    </section>
  );
};

const styles = {
  wrapper: {
    position: 'sticky' as const,
    top: '110px', // Adjust to height of your header
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: '1rem 2rem',
    gap: '2rem',
    color: '#ccc',
    fontSize: '1rem',
    flexWrap: 'wrap' as const,
    borderBottom: '1px solid #333',
  },
  heading: {
    fontSize: '1.3rem',
    fontWeight: 500,
    margin: 0,
    whiteSpace: 'nowrap',
  },
  statsRow: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap' as const,
  },
};

export default GitHubGrowthCard;
