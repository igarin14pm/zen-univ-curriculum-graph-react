import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import HeadTitle from '../../components/head/HeadTitle';

const HomePage = (): React.JSX.Element => {
  const pageName = 'Home';
  
  return (
    <>
      <HeadTitle pageName={pageName} />

      <DocumentPageLayout title={pageName}>
        <p>Home</p>
      </DocumentPageLayout>
    </>
  );
};

export default HomePage;
