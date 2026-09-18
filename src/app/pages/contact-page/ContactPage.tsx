import BreadcrumbList from '../../components/breadcrumb-list/BreadcrumbList';
import Callout from '../../components/callout/Callout';
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
        <p>不具合の報告、ご要望について</p>
        <h2>不具合の報告</h2>
        <h3>GitHub をご利用の方</h3>
        <p>
          以下の GitHub リポジトリにて不具合を報告する Issue を作成してください。
        </p>
        <Callout >
          <p>
            <b>igarin14pm/zen-univ-curriculum-graph-react</b><br />
            <a href="https://github.com/igarin14pm/zen-univ-curriculum-graph-react/">https://github.com/igarin14pm/zen-univ-curriculum-graph-react/</a>
          </p>
        </Callout>
        <p>
          報告の重複を防ぐため、<b>GitHub をご利用の方はなるべく GitHub Issues にてご報告ください。</b>
        </p>
        <h3>GitHub をご利用でない方</h3>
        <p>学内の Slackにて <b>@いがりん</b> まで、以下のフォーマットでご報告ください。</p>
        <h4>実行環境</h4>
        <p>
          不具合が発生する OS ・ブラウザ名とバージョンをご記入ください。<br />
          例: macOS 26.5.2, Google Chrome 151.0.7922.171 (公式ビルド) (arm64)
        </p>
        <h4>再現方法</h4>
        <p>
          どのような操作を行うと不具合が発生するかをご記入ください。<br />
          例: Homeページにある〇〇ボタンをクリックする
        </p>
        <h4>期待する動作</h4>
        <p>
          不具合が発生する機能が本来ならどのような動作をするべきかをご記入ください。<br />
          例: 〇〇ページに移動する
        </p>
        <h4>実際の動作</h4>
        <p>
          実際はどのような動作をするかをご記入ください。<br />
          例: 〇〇ページに移動せず、何も起こらない
        </p>
        <h2>ご要望</h2>
        <p>
          学内の Slackにて <b>@いがりん</b> までご連絡ください。<br />
          ご要望の全てにお応えできない場合がありますが、ご了承ください。
        </p>
      </DocumentPageLayout>
    </>
  );
};

export default ContactPage;
