import Fuse, { type FuseResult } from 'fuse.js';
import { Subject, Syllabus } from '../../../../data/syllabus';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import style from './SubjectLinkList.module.css';

interface SubjectLinkListProp {
  syllabus: Syllabus,
  searchQuery: string
}

const SubjectLinkList = ({ syllabus, searchQuery }: SubjectLinkListProp): React.JSX.Element => {
  const fuse = new Fuse(syllabus.subjects, {
    keys: ['name']
  });

  const searchResults: FuseResult<Subject>[] = fuse.search(searchQuery);

  const listItems: React.JSX.Element[] = searchResults.map((result) => {
    return <li key={result.item.id} className={style.listItem}><ScrollToTopLink to={result.item.id}>{result.item.name}</ScrollToTopLink></li>;
  });

  return (
    <ul className={style.list}>
      {listItems}
    </ul>
  );
};

export default SubjectLinkList;
