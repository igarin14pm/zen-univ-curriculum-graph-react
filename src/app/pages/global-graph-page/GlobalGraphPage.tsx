import GlobalGraphContainer from './components/GlobalGraphContainer';
import GlobalGraphHeader from './components/GlobalGraphHeader';
import HeadTitle from '../../components/head/HeadTitle';
import style from './GlobalGraphPage.module.css';

const GlobalGraphPage = (): React.JSX.Element => {
  return (
    <>
      <HeadTitle pageName='グローバルグラフ' />

      <div className={style.page}>
        <GlobalGraphHeader />
        <GlobalGraphContainer />
      </div>
    </>
  );
};

export default GlobalGraphPage;
