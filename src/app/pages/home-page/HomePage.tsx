import HeadTitle from '../../common-components/HeadTitle';
import PageContainer from '../PageContainer';

const HomePage = (): React.JSX.Element => {
  const pageName = 'Home';
  
  return (
    <>
      <HeadTitle pageName={pageName} />

      <PageContainer title={pageName}>
        <p>Home</p>
      </PageContainer>
    </>
  );
};

export default HomePage;
