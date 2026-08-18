interface HeadTitleProp {
  pageName: string;
}

const HeadTitle = ({ pageName }: HeadTitleProp): React.JSX.Element => {
  return <title>{`${pageName} - ZEN大 カリキュラム・グラフ`}</title>;
};

export default HeadTitle;
