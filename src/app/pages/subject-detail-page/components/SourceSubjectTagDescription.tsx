import Callout from '../../../components/callout/Callout';
import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';

interface SourceTagDescriptionProp {
  subjectName: string
}

const SourceSubjectTagDescription = ({ subjectName }: SourceTagDescriptionProp): React.JSX.Element => {
  return (
    <Callout>
      <HighlyRecommendedTag />: &quot;{subjectName}&quot; の前に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: &quot;{subjectName}&quot; の前提科目<br />
      無印: &quot;{subjectName}&quot; が後継科目として設定されている科目
    </Callout>
  );
};

export default SourceSubjectTagDescription;
