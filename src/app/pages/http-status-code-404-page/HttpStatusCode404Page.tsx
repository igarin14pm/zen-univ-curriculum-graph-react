import HomePageLinkButton from './components/HomePageLinkButton';
import PageContainer from '../PageContainer';
import StatusCodeBlock from './components/StatusCodeBlock';

const HttpStatusCode404Page = (): React.JSX.Element => {
  return (
    <PageContainer title="ページが見つかりませんでした">

      <StatusCodeBlock />

      <h2>URLが間違っていませんか？</h2>
      <p>URLを直接入力してこのページに来た場合は、入力したURLに間違いがないか確認してください。</p>
      <p>リンクを経由してこのページに来た場合、そのリンクのURLが間違っているかもしれません。リンクを作成した方にお伝えください。</p>

      <h2>URLに間違いがない場合</h2>
      <p>
        お探しのページのURLが変更されたか、ページ自体が削除された可能性があります。
        お手数ですが &quot;Home&quot; ページからお探しください。
      </p>
      <HomePageLinkButton />

    </PageContainer>
  );
};

export default HttpStatusCode404Page;
