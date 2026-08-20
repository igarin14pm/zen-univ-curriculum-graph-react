import MainBlock from '../main-block/MainBlock';
import Sidebar from '../sidebar/Sidebar';
import Toolbar from '../toolbar/Toolbar';
import style from './DocumentPageLayout.module.css';

interface DocumentPageLayoutProp {
  title: string;
  subjectId?: string;
  children: React.ReactNode;
}

const DocumentPageLayout = ({ title, subjectId, children }: DocumentPageLayoutProp): React.JSX.Element => {
  return (
    <>
      <Toolbar subjectId={subjectId} />
      <div className={style.scrollContainer}>
        <Sidebar subjectId={subjectId} />
        <MainBlock title={title}>
          {children}
        </MainBlock>
      </div>
    </>
  );
};

export default DocumentPageLayout;
