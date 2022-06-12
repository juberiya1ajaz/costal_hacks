import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import MyNFT from './pages/MyNFT';
import Gallery from './pages/Gallery';
import Visits from './pages/Visits';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/nft/my-nfts" element={<MyNFT />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visits" element={<Visits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
