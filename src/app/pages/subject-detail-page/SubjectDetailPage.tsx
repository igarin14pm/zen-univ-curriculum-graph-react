import { type Subject, Syllabus } from '../../../data/syllabus';
import BreadcrumbList from '../../components/breadcrumb-list/BreadcrumbList';
import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import { PageName } from '../page-name';
import RelatedSubjectListItems from './components/RelatedSubjectListItems';
import ScrollToTopLink from '../../components/link/ScrollToTopLink';
import SourceSubjectGraphContainer from './components/SourceSubjectGraphContainer';
import SourceSubjectTagDescription from './components/SourceSubjectTagDescription';
import TargetSubjectGraphContainer from './components/TargetSubjectGraphContainer';
import TargetSubjectTagDescription from './components/TargetSubjectTagDescription';

class SourceSubjects {
  highlyRecommendedPrerequisites: Subject[];
  recommendedPrerequisites: Subject[];
  recommendedSuccessors: Subject[];

  get isEmpty(): boolean {
    const highlyRecommendedPrerequisitesResult: boolean = this.highlyRecommendedPrerequisites.length === 0;
    const recommendedPrerequisitesResult: boolean = this.recommendedPrerequisites.length === 0;
    const recommendedSuccessorsResult: boolean = this.recommendedSuccessors.length === 0;
    return highlyRecommendedPrerequisitesResult && recommendedPrerequisitesResult && recommendedSuccessorsResult;
  }
  
  constructor(syllabus: Syllabus, subject: Subject) {
    this.highlyRecommendedPrerequisites = subject.highlyRecommendedPrerequisiteIds.map((id) => {
      return syllabus.get(id);
    });
    this.recommendedPrerequisites = subject.recommendedPrerequisiteIds.map((id) => {
      return syllabus.get(id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter);
    });
    this.recommendedSuccessors = syllabus.subjects.filter((subjectToFilter) => {
      return subjectToFilter.recommendedSuccessorIds.includes(subject.id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter) && !this.recommendedPrerequisites.includes(subjectToFilter);
    });
  }
}

class TargetSubjects {
  highlyRecommendedPrerequisites: Subject[];
  recommendedPrerequisites: Subject[];
  recommendedSuccessors: Subject[];

  get isEmpty(): boolean {
    const highlyRecommendedPrerequisitesResult: boolean = this.highlyRecommendedPrerequisites.length === 0;
    const recommendedPrerequisitesResult: boolean = this.recommendedPrerequisites.length === 0;
    const recommendedSuccessorsResult: boolean = this.recommendedSuccessors.length === 0;
    return highlyRecommendedPrerequisitesResult && recommendedPrerequisitesResult && recommendedSuccessorsResult;
  }

  constructor(syllabus: Syllabus, subject: Subject) {
    this.highlyRecommendedPrerequisites = syllabus.subjects.filter((subjectToFilter) => {
      return subjectToFilter.highlyRecommendedPrerequisiteIds.includes(subject.id);
    });
    this.recommendedPrerequisites = syllabus.subjects.filter((subjectToFilter) => {
      return subjectToFilter.recommendedPrerequisiteIds.includes(subject.id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter);
    });
    this.recommendedSuccessors = subject.recommendedSuccessorIds.map((id) => {
      return syllabus.get(id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter) && !this.recommendedPrerequisites.includes(subjectToFilter);
    });
  }
}

interface SubjectDetailPageProps {
  syllabus: Syllabus;
  subject: Subject;
}

const SubjectDetailPage = ({ syllabus, subject }: SubjectDetailPageProps): React.JSX.Element => {
  const sourceSubjects = new SourceSubjects(syllabus, subject);
  const targetSubjects = new TargetSubjects(syllabus, subject);

  const pageName: string = subject.name;

  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout subjectId={subject.id}>
        <BreadcrumbList isOnTop={true}>
          <ScrollToTopLink to="/">{PageName.home}</ScrollToTopLink> &gt; <ScrollToTopLink to="/subjects">{PageName.subjects}</ScrollToTopLink> &gt; {subject.name}
        </BreadcrumbList>
        <DocumentPageTitle isOnTop={false}>{subject.name}</DocumentPageTitle>
        <h2>この前に履修すべき科目</h2>
        <ul>
          <RelatedSubjectListItems 
            subjects={sourceSubjects.highlyRecommendedPrerequisites} 
            isPrerequisite={true}
            isHighlyRecommended={true}
          />
          <RelatedSubjectListItems
            subjects={sourceSubjects.recommendedPrerequisites}
            isPrerequisite={true}
            isHighlyRecommended={false}
          />
          <RelatedSubjectListItems
            subjects={sourceSubjects.recommendedSuccessors}
            isPrerequisite={false}
            isHighlyRecommended={false} 
          />
        </ul>
        {sourceSubjects.isEmpty ? <p>(なし)</p> : <SourceSubjectTagDescription subjectName={subject.name} />}
        <h3>グラフ</h3>
        <SourceSubjectGraphContainer syllabus={syllabus} currentlyViewingSubject={subject} />
        <h2>この後に履修すべき科目</h2>
        <ul>
          <RelatedSubjectListItems
            subjects={targetSubjects.highlyRecommendedPrerequisites}
            isPrerequisite={true}
            isHighlyRecommended={true}
          />
          <RelatedSubjectListItems
            subjects={targetSubjects.recommendedPrerequisites}
            isPrerequisite={true}
            isHighlyRecommended={false}
          />
          <RelatedSubjectListItems
            subjects={targetSubjects.recommendedSuccessors}
            isPrerequisite={false}
            isHighlyRecommended={false}
          />
        </ul>
        {targetSubjects.isEmpty ? <p>(なし)</p> : <TargetSubjectTagDescription subjectName={subject.name} />}
        <h3>グラフ</h3>
        <TargetSubjectGraphContainer syllabus={syllabus} currentlyViewingSubject={subject} />
      </DocumentPageLayout>
    </>
  );
};

export default SubjectDetailPage;
