import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import { PageName } from '../page-name';

const HomePage = (): React.JSX.Element => {
  
  return (
    <>
      <Head pageName={PageName.home} />

      <DocumentPageLayout>
        <DocumentPageTitle isOnTop={true}>{PageName.home}</DocumentPageTitle>
        <p>Home</p>
      </DocumentPageLayout>
    </>
  );
};

export default HomePage;
