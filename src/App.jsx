import { Routes, Route } from 'react-router-dom';
import PlayPage from './pages/PlayPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import MainPage from './pages/MainPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/play" element={<PlayPage />} />
      <Route path="/play" element={<PlayPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

export default App;
