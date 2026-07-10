import HighlyRecommendedTag from './HighlyRecommendedTag';
import { Link } from 'react-router';
import PrerequisiteTag from './PrerequisiteTag';
import { type Subject } from '../../../../data/syllabus';

interface ListItemsProp {
  subjects: Subject[];
  isPrerequisite: boolean;
  isHighlyRecommended: boolean;
}

const RelatedSubjectListItems = ({ subjects, isPrerequisite, isHighlyRecommended }: ListItemsProp): React.JSX.Element[] => {
  return subjects.map((subject) => {
    return (
      <li key={subject.id}>
        <Link to={`/subjects/${subject.id}`}>
          {subject.name}
        </Link>
        {isPrerequisite && <PrerequisiteTag />}
        {isHighlyRecommended && <HighlyRecommendedTag />}
      </li>
    );
  });
};

export default RelatedSubjectListItems;
