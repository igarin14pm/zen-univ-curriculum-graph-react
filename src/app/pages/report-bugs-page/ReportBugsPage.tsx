import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import HeadTitle from '../../components/head/HeadTitle';

const ReportBugsPage = (): React.JSX.Element => {
  const pageName = '不具合を報告する';
  
  return (
    <>
      <HeadTitle pageName={pageName} />

      <DocumentPageLayout title={pageName}>
        <p>(Report bugs)</p>
      </DocumentPageLayout>
    </>
  );
};

export default ReportBugsPage;
