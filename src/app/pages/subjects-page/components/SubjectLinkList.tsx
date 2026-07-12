import { Link } from 'react-router';
import { type Subject } from '../../../../data/syllabus';
import style from './SubjectLinkList.module.css';

interface SubjectLinkListProp {
  subjects: Subject[]
}

const SubjectLinkList = ({ subjects }: SubjectLinkListProp): React.JSX.Element => {
  const listItems: React.JSX.Element[] = subjects.map((subject) => {
    return <li key={subject.id} className={style.listItem}><Link to={subject.id}>{subject.name}</Link></li>;
  });

  return (
    <ul className={style.list}>
      {listItems}
    </ul>
  );
};

export default SubjectLinkList;
