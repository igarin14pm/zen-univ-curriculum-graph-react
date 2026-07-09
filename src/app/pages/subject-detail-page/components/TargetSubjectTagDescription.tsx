import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import style from './TargetSubjectTagDescription.module.css';

interface TargetSubjectTagDescriptionProp {
  subjectName: string;
}

const TargetSubjectTagDescription = ({ subjectName }: TargetSubjectTagDescriptionProp): React.JSX.Element => {
  return (
    <p className={style.container}>
      <HighlyRecommendedTag />: &quot;{subjectName}&quot; の後に履修することが強く推奨されている科目<br />
      <PrerequisiteTag />: &quot;{subjectName}&quot; が前提科目として設定されている科目<br />
      無印: &quot;{subjectName}&quot; の後継科目
    </p>
  );
};

export default TargetSubjectTagDescription;
