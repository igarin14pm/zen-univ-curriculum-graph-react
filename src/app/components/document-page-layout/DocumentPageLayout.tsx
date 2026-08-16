import MainBlock from '../main-block/MainBlock';
import Sidebar from '../sidebar/Sidebar';
import style from './DocumentPageLayout.module.css';

interface DocumentPageLayoutProp {
  title: string;
  children: React.ReactNode;
}

const DocumentPageLayout = ({ title, children }: DocumentPageLayoutProp): React.JSX.Element => {
  return (
    <div className={style.container}>
      <Sidebar />
      <MainBlock title={title}>
        {children}
      </MainBlock>
    </div>
  );
};

export default DocumentPageLayout;
