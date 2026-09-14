import Callout from '../../../components/callout/Callout';
import HighlyRecommendedTag from './HighlyRecommendedTag';
import PrerequisiteTag from './PrerequisiteTag';
import style from './TargetSubjectTagDescription.module.css';

interface TargetSubjectTagDescriptionProps {
  subjectName: string;
}

const TargetSubjectTagDescription = ({ subjectName }: TargetSubjectTagDescriptionProps): React.JSX.Element => {
  return (
    <Callout>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>
              <HighlyRecommendedTag />
            </th>
            <td>
              <b>{subjectName}</b> を事前に履修することが強く推奨されている科目
            </td>
          </tr>
          <tr>
            <th>
              <PrerequisiteTag />
            </th>
            <td>
              <b>{subjectName}</b> が前提科目として設定されている科目
            </td>
          </tr>
          <tr>
            <th>
              (無印)
            </th>
            <td>
              <b>{subjectName}</b> の後継科目
            </td>
          </tr>
        </tbody>
      </table>
    </Callout>
  );
};

export default TargetSubjectTagDescription;
