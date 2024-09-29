import { Routes, Route } from 'react-router-dom';
import PlayPage from './pages/PlayPage.jsx';
import MainPage from './pages/MainPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  );
};

export default App;
