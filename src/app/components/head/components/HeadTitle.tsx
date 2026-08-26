interface HeadTitleProps {
  pageName: string;
}

const HeadTitle = ({ pageName }: HeadTitleProps): React.JSX.Element => {
  return <title>{`${pageName} - ZEN大 カリキュラム・グラフ`}</title>;
};

export default HeadTitle;
