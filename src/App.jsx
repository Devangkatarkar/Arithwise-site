import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Solutions from './components/Solutions';
import Connect from './components/Connect';
import Login from './components/Login'; // ✅ ADD THIS IMPORT

function App() {
  const [page, setPage] = useState('Home');

  useEffect(() => {
    // Scroll to the correct section after navigation
    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (page === 'Overview') scrollToId('overview-section');
    else if (page === 'Solutions') scrollToId('solutions-section');
    else if (page === 'Connect') scrollToId('connect-section');
    else if (page === 'Sign In') window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ FIXED
    else scrollToId('hero-section');
  }, [page]);

  return (
    <div className="App">
      <Navbar onNavigate={setPage} activePage={page} />

      {/* Render Overview as a separate main page when selected; otherwise show Hero */}
      {page === 'Overview' ? (
        <Overview />
      ) : page === 'Solutions' ? (
        <Solutions />
      ) : page === 'Connect' ? (
        <Connect />
      ) : page === 'Sign In' ? (
        <Login /> // ✅ RENDER LOGIN COMPONENT
      ) : (
        <Hero activePage={page} />
      )}

      <Footer />
    </div>
  );
}

export default App;