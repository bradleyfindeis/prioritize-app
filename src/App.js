import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Lists from './pages/Lists';
import NewList from './pages/NewList';
import List from './pages/List';
import Prioritizie from './pages/Prioritize';

function App() {
  return (
    <Router>
      <div className="full-page">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists/new" element={<NewList />} />
          <Route path="/lists/:id" element={<List />} />
          <Route path='/lists/:id/prioritize' element={<Prioritizie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;