import PageContainer from '../PageContainer';
import SearchBox from './components/SearchBox';
import { type SetStateValue } from '../../../utils/set-state-value';
import SubjectLinkList from './components/SubjectLinkList';
import { Syllabus } from '../../../data/syllabus';
import { useState } from 'react';

interface SubjectsPageProp {
  syllabus: Syllabus;
}

const SubjectsPage = ({ syllabus }: SubjectsPageProp): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery]: SetStateValue<string> = useState('');

  return (
    <PageContainer title="科目">
      <SearchBox setQuery={setQuery} />
      <SubjectLinkList subjects={syllabus.subjects} />
    </PageContainer>
  );
};

export default SubjectsPage;
