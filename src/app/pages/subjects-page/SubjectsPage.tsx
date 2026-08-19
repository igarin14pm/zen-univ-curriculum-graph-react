import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import Head from '../../components/head/Head';
import SearchBox from './components/SearchBox';
import SubjectLinkList from './components/SubjectLinkList';
import { Syllabus } from '../../../data/syllabus';
import { type UseStateValue } from '../../../types/use-state-value';
import { useState } from 'react';

interface SubjectsPageProp {
  syllabus: Syllabus;
}

const SubjectsPage = ({ syllabus }: SubjectsPageProp): React.JSX.Element => {
  const [query, setQuery]: UseStateValue<string> = useState('');

  const pageName = '科目';

  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout title={pageName}>
        <SearchBox setQuery={setQuery} />
        <SubjectLinkList syllabus={syllabus} searchQuery={query} />
      </DocumentPageLayout>
    </>
  );
};

export default SubjectsPage;
