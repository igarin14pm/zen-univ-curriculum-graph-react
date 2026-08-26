import BreadcrumbList from '../../components/breadcrumb-list/BreadcrumbList';
import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import { PageName } from '../page-name';
import ScrollToTopLink from '../../components/link/ScrollToTopLink';

const ContactPage = (): React.JSX.Element => {
  const pageName = 'お問い合わせ';
  
  return (
    <>
      <Head pageName={pageName} />

      <DocumentPageLayout>
        <BreadcrumbList isOnTop={true}>
          <ScrollToTopLink to='/'>{PageName.home}</ScrollToTopLink> &gt; {PageName.contact}
        </BreadcrumbList>
        <DocumentPageTitle isOnTop={false}>{PageName.contact}</DocumentPageTitle>
        <p>(Contact)</p>
      </DocumentPageLayout>
    </>
  );
};

export default ContactPage;
