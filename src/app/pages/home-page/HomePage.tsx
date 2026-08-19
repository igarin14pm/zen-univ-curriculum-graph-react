import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import Head from '../../components/head/Head';

const HomePage = (): React.JSX.Element => {
  const pageName = 'Home';
  
  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout title={pageName}>
        <p>Home</p>
      </DocumentPageLayout>
    </>
  );
};

export default HomePage;
