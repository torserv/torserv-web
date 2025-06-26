import { Routes, Route } from 'react-router-dom';
import WhyTorServ from './pages/WhyTorServ';
import HowToHost from './pages/HowToHost';
import ThreatModel from './pages/ThreatModel'; // ✅ Import your new component

import GitHubGrowthCard from './components/GitHubGrowthCard';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';

import WelcomeCard from './components/WelcomeCard';
import FeaturesCard from './components/FeaturesCard';
import InstallCard from './components/InstallCard';
import CommunityCard from './components/CommunityCard';
import LicenseCard from './components/LicenseCard';

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <GitHubGrowthCard />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={
            <>
              <WelcomeCard />
              <FeaturesCard />
              <InstallCard />
              <CommunityCard />
              <LicenseCard />
            </>
          } />
          <Route path="/why-torserv" element={<WhyTorServ />} />
          <Route path="/howto-host" element={<HowToHost />} />
          <Route path="/threat-model" element={<ThreatModel />} /> {/* ✅ Add this line */}
          <Route path="*" element={<NotFound />} />
        </Routes>
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
  main: {
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
  },
};

export default App;
