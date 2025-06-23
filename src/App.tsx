import GitHubGrowthCard from './components/GitHubGrowthCard';
import WelcomeCard from './components/WelcomeCard';
import InstallCard from './components/InstallCard';
import CommunityCard from './components/CommunityCard';
import Footer from './components/Footer';
import LicenseCard from './components/LicenseCard';
import FeaturesCard from './components/FeaturesCard';
import Header from './components/Header';

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <GitHubGrowthCard />

      <main style={styles.main}>
        <WelcomeCard />
        <FeaturesCard />
        <InstallCard />
        <CommunityCard />
        <LicenseCard />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#121212',
    color: '#ddd',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: '#1e1e1e',
    padding: '1rem 2rem',
    borderBottom: '1px solid #333',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    color: '#fff',
  },
  main: {
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
  },
  card: {
    width: '65%',
    backgroundColor: '#1c1c1c',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  logo: {
    height: '75px',
    width: 'auto',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
};

export default App;
