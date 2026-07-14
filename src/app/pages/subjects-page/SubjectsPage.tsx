import PageContainer from '../PageContainer';
import SearchBox from './components/SearchBox';
import SubjectLinkList from './components/SubjectLinkList';
import { Syllabus } from '../../../data/syllabus';
import { type UseStateValue } from '../../../utils/use-state-value';
import { useState } from 'react';

interface SubjectsPageProp {
  syllabus: Syllabus;
}

const SubjectsPage = ({ syllabus }: SubjectsPageProp): React.JSX.Element => {
  const [query, setQuery]: UseStateValue<string> = useState('');

  return (
    <PageContainer title="科目">
      <SearchBox setQuery={setQuery} />
      <SubjectLinkList syllabus={syllabus} searchQuery={query} />
    </PageContainer>
  );
};

export default SubjectsPage;
