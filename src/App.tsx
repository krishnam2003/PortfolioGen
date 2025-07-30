
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CreatePortfolioPage } from './pages/CreatePortfolioPage';
import { ProfessionalsListPage } from './pages/ProfessionalsListPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { EditProfilePage } from './pages/EditProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePortfolioPage />} />
          <Route path="/professionals" element={<ProfessionalsListPage />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/edit/:id" element={<EditProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;