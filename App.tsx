import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AstroMatchCompatibility from '../AstroMatch/Cosmic Astrology Compatibility Page/App.tsx';
import AstroMatchLanding from '../AstroMatch/Cosmic Astrology Landing Page/App.tsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/compatibility">Compatibility Page</Link> | 
        <Link to="/landing">Landing Page</Link>
      </nav>
      <Routes>
        <Route path="/compatibility" element={<AstroMatchCompatibility />} />
        <Route path="/landing" element={<AstroMatchLanding />} />
        <Route path="/" element={<AstroMatchLanding />} />
      </Routes>
    </Router>
  );
}

export default App;