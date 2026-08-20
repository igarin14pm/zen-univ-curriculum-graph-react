import HeadTitle from './components/HeadTitle';

interface HeadProp {
  pageName: string;
}

const Head = ({ pageName }: HeadProp): React.JSX.Element => {
  return (
    <>
      <HeadTitle pageName={pageName} />
    </>
  );
};

export default Head;
