import Callout from '../../../components/callout/Callout';
import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';

interface TargetSubjectTagDescriptionProp {
  subjectName: string;
}

const TargetSubjectTagDescription = ({ subjectName }: TargetSubjectTagDescriptionProp): React.JSX.Element => {
  return (
    <Callout>
      <HighlyRecommendedTag />: &quot;{subjectName}&quot; の後に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: &quot;{subjectName}&quot; が前提科目として設定されている科目<br />
      無印: &quot;{subjectName}&quot; の後継科目
    </Callout>
  );
};

export default TargetSubjectTagDescription;
