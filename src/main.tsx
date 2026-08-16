import { BrowserRouter, Route, Routes } from 'react-router';
import { mockSubjectDetailsByName, mockSubjectNameIdMap } from './data/subject-data-source';
import App from './app/App';
import GlobalGraphPage from './app/pages/global-graph-page/GlobalGraphPage';
import HomePage from './app/pages/home-page/HomePage';
import HttpStatusCode404Page from './app/pages/http-status-code-404-page/HttpStatusCode404Page';
import ReportBugsPage from './app/pages/report-bugs-page/ReportBugsPage';
import { StrictMode } from 'react';
import SubjectDetailPage from './app/pages/subject-detail-page/SubjectDetailPage';
import SubjectsPage from './app/pages/subjects-page/SubjectsPage';
import { Syllabus } from './data/syllabus';
import { createRoot } from 'react-dom/client';

const syllabus = new Syllabus(mockSubjectNameIdMap, mockSubjectDetailsByName);

const subjectDetailPages: React.JSX.Element[] = syllabus.subjects.map((subject) => {
  return <Route path={subject.id} element={<SubjectDetailPage syllabus={syllabus} subject={subject} />} />;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="global-graph" element={<GlobalGraphPage />} />
          <Route path="report-bugs" element={<ReportBugsPage />} />
          <Route path="subjects">
            <Route index element={<SubjectsPage syllabus={syllabus} />} />
            {subjectDetailPages}
          </Route>
          <Route path="*" element={<HttpStatusCode404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
