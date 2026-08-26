import Footer from '../footer/Footer';
import MainBlock from '../main-block/MainBlock';
import Sidebar from '../sidebar/Sidebar';
import Toolbar from '../toolbar/Toolbar';
import style from './DocumentPageLayout.module.css';

interface DocumentPageLayoutProps {
  subjectId?: string;
  children: React.ReactNode;
}

const DocumentPageLayout = ({ subjectId, children }: DocumentPageLayoutProps): React.JSX.Element => {
  return (
    <>
      <Toolbar subjectId={subjectId} />
      <div className={style.scrollContainer}>
        <Sidebar subjectId={subjectId} />
        <div>
          <MainBlock>
            {children}
          </MainBlock>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DocumentPageLayout;
