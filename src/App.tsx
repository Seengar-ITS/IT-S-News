import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Bookmarks from './pages/Bookmarks'
import Trending from './pages/Trending'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}