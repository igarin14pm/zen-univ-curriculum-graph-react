import BreadcrumbList from '../../components/breadcrumb-list/BreadcrumbList';
import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import { PageName } from '../page-name';
import ScrollToTopLink from '../../components/link/ScrollToTopLink';

const ReportBugsPage = (): React.JSX.Element => {
  const pageName = '不具合を報告する';
  
  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout>
        <BreadcrumbList isOnTop={true}>
          <ScrollToTopLink to='/'>{PageName.home}</ScrollToTopLink> &gt; {PageName.reportBugs}
        </BreadcrumbList>
        <DocumentPageTitle isOnTop={false}>{PageName.reportBugs}</DocumentPageTitle>
        <p>(Report bugs)</p>
      </DocumentPageLayout>
    </>
  );
};

export default ReportBugsPage;
