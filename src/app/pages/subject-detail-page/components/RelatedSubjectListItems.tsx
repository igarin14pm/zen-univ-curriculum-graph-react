import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import ScrollToTopLink from '../../../common-components/ScrollToTopLink';
import { type Subject } from '../../../../data/syllabus';

interface RelatedSubjectListItemsProp {
  subjects: Subject[];
  isPrerequisite: boolean;
  isHighlyRecommended: boolean;
}

const RelatedSubjectListItems = ({ subjects, isPrerequisite, isHighlyRecommended }: RelatedSubjectListItemsProp): React.JSX.Element[] => {
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
