interface HeadOgpProp {
  title: string;
  type: string;
  routerPath: string;
  description: string;
}

const HeadOgp = ({ title, type, routerPath, description }: HeadOgpProp): React.JSX.Element => {
  return (
    <>
      <meta property="og:site_name" content="ZEN大 カリキュラム・グラフ" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`https://zen-univ-curriculum-graph.igarin14pm.com${routerPath}`} />
      <meta property="og:image" content="https://zen-univ-curriculum-graph.igarin14pm.com/images/og-image.png" />
      <meta property="og:image:alt" content="右に &quot;ZEN大 カリキュラム・グラフ&quot; という文字、左にそのロゴがある画像" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default HeadOgp;
