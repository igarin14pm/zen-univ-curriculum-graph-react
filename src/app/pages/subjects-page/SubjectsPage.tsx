import BreadcrumbList from '../../components/breadcrumb-list/BreadcrumbList';
import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import { PageName } from '../page-name';
import ScrollToTopLink from '../../components/link/ScrollToTopLink';
import SearchBox from './components/SearchBox';
import SubjectLinkList from './components/SubjectLinkList';
import { Syllabus } from '../../../data/syllabus';
import { type UseStateValue } from '../../../types/use-state-value';
import { useState } from 'react';

interface SubjectsPageProps {
  syllabus: Syllabus;
}

const SubjectsPage = ({ syllabus }: SubjectsPageProps): React.JSX.Element => {
  const [query, setQuery]: UseStateValue<string> = useState('');
  const pageName: string = PageName.subjects;

  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout>
        <BreadcrumbList isOnTop={true}>
          <ScrollToTopLink to="/">{PageName.home}</ScrollToTopLink> &gt; {PageName.subjects}
        </BreadcrumbList>
        <DocumentPageTitle isOnTop={false}>{PageName.subjects}</DocumentPageTitle>
        <SearchBox setQuery={setQuery} />
        <SubjectLinkList syllabus={syllabus} searchQuery={query} />
      </DocumentPageLayout>
    </>
  );
};

export default SubjectsPage;
