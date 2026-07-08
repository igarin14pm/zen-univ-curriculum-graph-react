import PageLayout from '../components/PageLayout';
import { type Subject } from '../data/syllabus';

interface SubjectDetailPageProp {
  subject: Subject;
}

const SubjectDetailPage = ({ subject }: SubjectDetailPageProp): React.JSX.Element => {
  return (
    <PageLayout title={subject.name}>
      <p>(Subject detail page)</p>
    </PageLayout>
  );
};

export default SubjectDetailPage;
