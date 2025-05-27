import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayMusic from './Pages/PlayMusic';
import MusicDetail from './Pages/MusicDetail';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayMusic />} />
        <Route path="/detail" element={<MusicDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
