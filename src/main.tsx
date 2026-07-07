import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage';
import ReportBugsPage from './pages/ReportBugsPage';
import { StrictMode } from 'react';
import SubjectPage from './pages/SubjectPage';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="subject" element={<SubjectPage />} />
          <Route path="report-bugs" element={<ReportBugsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
