import { BrowserRouter, Route, Routes } from 'react-router';
import App from './app/App';
import HomePage from './app/pages/home-page/HomePage';
import ReportBugsPage from './app/pages/report-bugs-page/ReportBugsPage';
import { StrictMode } from 'react';
import SubjectDetailPage from './app/pages/subject-detail-page/SubjectDetailPage';
import SubjectsPage from './app/pages/subjects-page/SubjectsPage';
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
          <Route path="subjects">
            <Route index element={<SubjectsPage />} />
            {subjectDetailPages}
          </Route>
          <Route path="report-bugs" element={<ReportBugsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
