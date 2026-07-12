import PageContainer from '../PageContainer';
import SubjectLinkList from './components/SubjectLinkList';
import { Syllabus } from '../../../data/syllabus';

interface SubjectsPageProp {
  syllabus: Syllabus;
}

const SubjectsPage = ({ syllabus }: SubjectsPageProp): React.JSX.Element => {
  return (
    <PageContainer title="科目">
      <SubjectLinkList subjects={syllabus.subjects} />
    </PageContainer>
  );
};

export default SubjectsPage;
