import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import Head from '../../components/head/Head';

const ReportBugsPage = (): React.JSX.Element => {
  const pageName = '不具合を報告する';
  
  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout title={pageName}>
        <p>(Report bugs)</p>
      </DocumentPageLayout>
    </>
  );
};

export default ReportBugsPage;
