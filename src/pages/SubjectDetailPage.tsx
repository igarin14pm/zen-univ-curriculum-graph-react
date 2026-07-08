import { type Subject, Syllabus } from '../data/syllabus';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import style from './SubjectDetailPage.module.css';

const PrerequisiteTag = (): React.JSX.Element => {
  return <span className={style.prerequisiteTag}>前提</span>;
};

const HighlyRecommendedTag = (): React.JSX.Element => {
  return <span className={style.highlyRecommendedTag}>強く推奨</span>;
};

interface ListItemsProp {
  subjects: Subject[];
  isPrerequisite: boolean;
  isHighlyRecommended: boolean;
}

const ListItems = ({ subjects, isPrerequisite, isHighlyRecommended }: ListItemsProp): React.JSX.Element[] => {
  return subjects.map((subject) => {
    return (
      <li key={subject.id}>
        <Link to={`/subject/${subject.id}`}>
          {subject.name}
        </Link>
        {isPrerequisite && <PrerequisiteTag />}
        {isHighlyRecommended && <HighlyRecommendedTag />}
      </li>
    );
  });
};

interface SubjectDetailPageProp {
  subject: Subject;
}


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

const SourceSubjectTagDescription = (): React.JSX.Element => {
  return (
    <p className={style.tagDescription}>
      <HighlyRecommendedTag />: この科目の前に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: この科目の前提科目<br />
      無印: この科目が後継科目として設定されている科目
    </p>
  );
};

const TargetSubjectTagDescription = (): React.JSX.Element => {
  return (
    <p className={style.tagDescription}>
      <HighlyRecommendedTag />: この科目の後に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: この科目が前提科目として設定されている科目<br />
      無印: この科目の後継科目
    </p>
  );
};

const SubjectDetailPage = ({ subject }: SubjectDetailPageProp): React.JSX.Element => {
 const sourceSubjects = new SourceSubjects(subject);
 const targetSubjects = new TargetSubjects(subject);
  return (
    <PageLayout title={subject.name}>
      <h2>この前に履修すべき科目</h2>
      <ul>
        <ListItems 
          subjects={sourceSubjects.highlyRecommendedPrerequisites} 
          isPrerequisite={true}
          isHighlyRecommended={true}
        />
        <ListItems
          subjects={sourceSubjects.recommendedPrerequisites}
          isPrerequisite={true}
          isHighlyRecommended={false}
        />
        <ListItems
          subjects={sourceSubjects.recommendedSuccessors}
          isPrerequisite={false}
          isHighlyRecommended={false} 
        />
      </ul>
      {sourceSubjects.isEmpty ? <p>(なし)</p> : <SourceSubjectTagDescription />}
      <h2>この後に履修すべき科目</h2>
      <ul>
        <ListItems
          subjects={targetSubjects.highlyRecommendedPrerequisites}
          isPrerequisite={true}
          isHighlyRecommended={true}
        />
        <ListItems
          subjects={targetSubjects.recommendedPrerequisites}
          isPrerequisite={true}
          isHighlyRecommended={false}
        />
        <ListItems
          subjects={targetSubjects.recommendedSuccessors}
          isPrerequisite={false}
          isHighlyRecommended={false}
        />
      </ul>
      {targetSubjects.isEmpty ? <p>(なし)</p> : <TargetSubjectTagDescription />}
    </PageLayout>
  );
};

export default SubjectDetailPage;
