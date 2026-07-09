import { BrowserRouter, Route, Routes } from 'react-router';
import App from './app/App';
import HomePage from './pages/HomePage';
import ReportBugsPage from './pages/ReportBugsPage';
import { StrictMode } from 'react';
import SubjectDetailPage from './pages/SubjectDetailPage';
import SubjectPage from './pages/SubjectPage';
import { Syllabus } from './data/syllabus';
import { createRoot } from 'react-dom/client';

const subjectDetailPages: React.JSX.Element[] = Syllabus.mockSubjects.map((subject) => {
  return <Route path={subject.id} element={<SubjectDetailPage subject={subject} />} />;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="subject">
            <Route index element={<SubjectPage />} />
            {subjectDetailPages}
          </Route>
          <Route path="report-bugs" element={<ReportBugsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
