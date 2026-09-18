import HeadTitle from './components/HeadTitle';

interface HeadProps {
  pageName: string;
}

const Head = ({ pageName }: HeadProps): React.JSX.Element => {
  return <HeadTitle pageName={pageName} />;
};

export default Head;
