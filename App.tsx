import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AstroMatchCompatibility from './Cosmic Astrology Compatibility Page/App';
import AstroMatchLanding from './Cosmic Astrology Landing Page/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/compatibility" element={<AstroMatchCompatibility />} />
        <Route path="/landing" element={<AstroMatchLanding />} />
        <Route path="/" element={<AstroMatchLanding />} />
      </Routes>
    </Router>
  );
}

export default App;