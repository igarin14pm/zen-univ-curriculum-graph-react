import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import style from './SourceSubjectTagDescription.module.css';

interface SourceTagDescriptionProp {
  subjectName: string
}

const SourceSubjectTagDescription = ({ subjectName }: SourceTagDescriptionProp): React.JSX.Element => {
  return (
    <p className={style.container}>
      <HighlyRecommendedTag />: &quot;{subjectName}&quot; の前に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: &quot;{subjectName}&quot; の前提科目<br />
      無印: &quot;{subjectName}&quot; が後継科目として設定されている科目
    </p>
  );
};

export default SourceSubjectTagDescription;
