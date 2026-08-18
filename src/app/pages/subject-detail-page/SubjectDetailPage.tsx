import { type Subject, Syllabus } from '../../../data/syllabus';
import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import HeadTitle from '../../components/head/HeadTitle';
import RelatedSubjectListItems from './components/RelatedSubjectListItems';
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

interface SubjectDetailPageProp {
  syllabus: Syllabus;
  subject: Subject;
}

const SubjectDetailPage = ({ syllabus, subject }: SubjectDetailPageProp): React.JSX.Element => {
  const sourceSubjects = new SourceSubjects(syllabus, subject);
  const targetSubjects = new TargetSubjects(syllabus, subject);

  const pageTitle: string = subject.name;

  return (
    <>
      <HeadTitle pageName={pageTitle} />

      <DocumentPageLayout title={pageTitle} subjectNumbering={subject.id}>
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
