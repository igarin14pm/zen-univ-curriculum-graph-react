import Callout from '../../../components/callout/Callout';
import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import style from './SourceSubjectTagDescription.module.css';

interface SourceTagDescriptionProp {
  subjectName: string
}

const SourceSubjectTagDescription = ({ subjectName }: SourceTagDescriptionProp): React.JSX.Element => {
  return (
    <Callout>
      <table className={style.table}>
        <tr>
          <th>
            <HighlyRecommendedTag />
          </th>
          <td>
            <b>{subjectName}</b> の前に履修することが強く推奨されている科目
          </td>
        </tr>
        <tr>
          <th>
            <PrerequisiteTag />
          </th>
          <td>
            <b>{subjectName}</b> の前提科目
          </td>
        </tr>
        <tr>
          <th>
            (無印)
          </th>
          <td>
            <b>{subjectName}</b> が後継科目として設定されている科目
          </td>
        </tr>
      </table>
    </Callout>
  );
};

export default SourceSubjectTagDescription;
