import { type Subject, Syllabus } from '../../../data/syllabus';
import PageContainer from '../PageContainer';
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
  
  constructor(subject: Subject) {
    this.highlyRecommendedPrerequisites = subject.highlyRecommendedPrerequisites.map((id) => {
      return Syllabus.getSubjectById(id);
    });
    this.recommendedPrerequisites = subject.recommendedPrerequisites.map((id) => {
      return Syllabus.getSubjectById(id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter);
    });
    this.recommendedSuccessors = Syllabus.mockSubjects.filter((subjectToFilter) => {
      return subjectToFilter.recommendedSuccessors.includes(subject.id);
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

  constructor(subject: Subject) {
    this.highlyRecommendedPrerequisites = Syllabus.mockSubjects.filter((subjectToFilter) => {
      return subjectToFilter.highlyRecommendedPrerequisites.includes(subject.id);
    });
    this.recommendedPrerequisites = Syllabus.mockSubjects.filter((subjectToFilter) => {
      return subjectToFilter.recommendedPrerequisites.includes(subject.id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter);
    });
    this.recommendedSuccessors = subject.recommendedSuccessors.map((id) => {
      return Syllabus.getSubjectById(id);
    }).filter((subjectToFilter) => {
      return !this.highlyRecommendedPrerequisites.includes(subjectToFilter) && !this.recommendedPrerequisites.includes(subjectToFilter);
    });
  }
}

interface SubjectDetailPageProp {
  subject: Subject;
}

const SubjectDetailPage = ({ subject }: SubjectDetailPageProp): React.JSX.Element => {
  const sourceSubjects = new SourceSubjects(subject);
  const targetSubjects = new TargetSubjects(subject);

  return (
    <PageContainer title={subject.name}>
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
      <SourceSubjectGraphContainer currentlyViewingSubject={subject} />
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
      <TargetSubjectGraphContainer currentlyViewingSubject={subject} />
    </PageContainer>
  );
};

export default SubjectDetailPage;
