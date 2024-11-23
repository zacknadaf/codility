import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CLangPage from './pages/CLangPage';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/c" element={<CLangPage />} />
        <Route path="/:language" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;