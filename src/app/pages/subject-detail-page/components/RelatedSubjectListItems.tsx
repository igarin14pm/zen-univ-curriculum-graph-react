import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import { type Subject } from '../../../../data/syllabus';

interface RelatedSubjectListItemsProps {
  subjects: Subject[];
  isPrerequisite: boolean;
  isHighlyRecommended: boolean;
}

const RelatedSubjectListItems = ({ subjects, isPrerequisite, isHighlyRecommended }: RelatedSubjectListItemsProps): React.JSX.Element[] => {
  return subjects.map((subject) => {
    return (
      <li key={subject.id}>
        <ScrollToTopLink to={`/subjects/${subject.id}`}>
          {subject.name}
        </ScrollToTopLink>
        {isPrerequisite && <PrerequisiteTag />}
        {isHighlyRecommended && <HighlyRecommendedTag />}
      </li>
    );
  });
};

export default RelatedSubjectListItems;
