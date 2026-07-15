import HeadTitle from '../../common-components/HeadTitle';
import PageContainer from '../PageContainer';

const ReportBugsPage = (): React.JSX.Element => {
  const pageName = '不具合を報告する';
  
  return (
    <>
      <HeadTitle pageName={pageName} />

      <PageContainer title={pageName}>
        <p>(Report bugs)</p>
      </PageContainer>
    </>
  );
};

export default ReportBugsPage;
