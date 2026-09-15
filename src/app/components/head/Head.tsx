import HeadOgp from './components/HeadOgp';
import HeadTitle from './components/HeadTitle';

interface HeadProps {
  pageName: string;
  ogTitle: string;
  ogType: string;
  ogRouterPath: string;
  ogDescription: string;
}

const Head = ({ pageName, ogTitle, ogType, ogRouterPath, ogDescription }: HeadProps): React.JSX.Element => {
  return (
    <>
      <HeadTitle pageName={pageName} />
      <HeadOgp 
        title={ogTitle}
        type={ogType}
        routerPath={ogRouterPath}
        description={ogDescription}
      />
    </>
  );
};

export default Head;
