import { useEffect, useState } from 'react';

type Contributor = {
  login: string;
  contributions: number;
};

type RepoStats = {
  stars: number;
  forks: number;
  createdAt: string;
  starsPerDay: number;
  contributors: Contributor[];
};

const GitHubGrowthCard = () => {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cacheKey = 'githubRepoStats';
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const parsed = JSON.parse(cached);
      const now = Date.now();
      if (now - parsed.timestamp < 60 * 1000) {
        setStats(parsed.data);
        return;
      }
    }

    Promise.all([
      fetch('https://api.github.com/repos/torserv/torserv'),
      fetch('https://api.github.com/repos/torserv/torserv/contributors?per_page=100')
    ])
      .then(async ([resRepo, resContrib]) => {
        if (!resRepo.ok || !resContrib.ok) throw new Error('GitHub API request failed');
        const dataRepo = await resRepo.json();
        const dataContrib = await resContrib.json();

        const created = new Date(dataRepo.created_at);
        const now = new Date();
        const daysOld = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
        const starsPerDay = dataRepo.stargazers_count / daysOld;

        const statsData: RepoStats = {
          stars: dataRepo.stargazers_count,
          forks: dataRepo.forks_count,
          createdAt: created.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          starsPerDay: parseFloat(starsPerDay.toFixed(2)),
          contributors: dataContrib.map((c: any) => ({
            login: c.login,
            contributions: c.contributions,
          })),
        };

        setStats(statsData);
        localStorage.setItem(cacheKey, JSON.stringify({ data: statsData, timestamp: Date.now() }));
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section style={styles.wrapper}>
      <h2 style={styles.heading}>GitHub Growth</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : stats ? (
        <>
          <div style={styles.statsRow}>
            <span>⭐ {stats.stars} stars</span>
            <span>🍴 {stats.forks} forks</span>
            <span>📅 Created: {stats.createdAt}</span>
            <span>📈 ~{stats.starsPerDay} stars/day</span>
            <span>👥 Contributors: {stats.contributors.length}</span>
          </div>
        </>
      ) : (
        <p>Loading GitHub stats...</p>
      )}
    </section>
  );
};

const styles = {
  wrapper: {
    position: 'sticky' as const,
    top: '110px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: '1rem 2rem',
    color: '#ccc',
    fontSize: '1rem',
    borderBottom: '1px solid #333',
    gap: '0.75rem',
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
  contributors: {
    fontSize: '0.9rem',
    color: '#bbb',
  },
};

export default GitHubGrowthCard;
