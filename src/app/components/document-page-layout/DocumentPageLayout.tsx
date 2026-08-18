import MainBlock from '../main-block/MainBlock';
import Sidebar from '../sidebar/Sidebar';
import style from './DocumentPageLayout.module.css';

interface DocumentPageLayoutProp {
  title: string;
  subjectNumbering?: string;
  children: React.ReactNode;
}

const DocumentPageLayout = ({ title, subjectNumbering, children }: DocumentPageLayoutProp): React.JSX.Element => {
  return (
    <div className={style.container}>
      <Sidebar subjectNumbering={subjectNumbering} />
      <MainBlock title={title}>
        {children}
      </MainBlock>
    </div>
  );
};

export default DocumentPageLayout;
