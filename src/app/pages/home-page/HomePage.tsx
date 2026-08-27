import DocumentPageLayout from '../../components/document-page-layout/DocumentPageLayout';
import DocumentPageTitle from '../../components/document-page-title/DocumentPageTitle';
import Head from '../../components/head/Head';
import HomePageContactButton from './components/HomePageContactButton';
import HomePageGlobalGraphButton from './components/HomePageGlobalGraphButton';
import HomePageSubjectsButton from './components/HomePageSubjectsButton';
import InfoCallout from '../../components/callout/InfoCallout';
import { PageName } from '../page-name';
import WarningCallout from '../../components/callout/WarningCallout';

const HomePage = (): React.JSX.Element => {
  
  return (
    <>
      <Head pageName={PageName.home} />

      <DocumentPageLayout>
        <DocumentPageTitle isOnTop={true}>{PageName.home}</DocumentPageTitle>

        <h2>&quot;ZEN大 カリキュラム・グラフ&quot; について</h2>
        <p>ZEN大学における科目の前提・後継科目と、そのグラフを閲覧することができます。</p>
        <WarningCallout title="注意">
          <p>このWebサイトは大学が公式に提供しているものではありません。</p>
          <p>履修登録を行う際はシラバス、カリキュラム・ツリー、カリキュラム・マップを必ずご確認ください。</p>
        </WarningCallout>
        <InfoCallout title="情報">
          <p>
            科目のデータは2026年4月1日時点のカリキュラム・マップに基づくものです。
          </p>
        </InfoCallout>

        <h2>使い方</h2>

        <h3>グローバルグラフを表示する</h3>
        <HomePageGlobalGraphButton />
        <p>すべての科目についてのグラフを表示することができます。</p>
        <p>各科目のノード (丸印) をクリック・タップすると、その科目のページへと移動します。</p>
        <p>各ノードはドラッグすることで動かすことができます。</p>
        
        <h3>科目ごとのページを見る</h3>
        <HomePageSubjectsButton />
        <p>各科目のページを探すことができます。</p>
        <p>科目ページ内には関連する履修科目とそのグラフが掲載されています。</p>

        <h2>お問い合わせについて</h2>
        <HomePageContactButton />
        <p>不具合やご要望がありましたら、こちらのページをご覧ください。</p>

      </DocumentPageLayout>
    </>
  );
};

export default HomePage;
