import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App/App';
import MusicDetail from './Pages/MusicDetail';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/music-detail" element={<MusicDetail />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
