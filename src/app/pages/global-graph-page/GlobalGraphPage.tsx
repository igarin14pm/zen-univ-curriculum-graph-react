import GlobalGraphContainer from './components/GlobalGraphContainer';
import GlobalGraphHeader from './components/GlobalGraphHeader';
import HeadTitle from '../../components/head/HeadTitle';
import { type Syllabus } from '../../../data/syllabus';
import { type UseSearchParamsValue } from '../../../types/use-search-params-value';
import style from './GlobalGraphPage.module.css';
import { useSearchParams } from 'react-router';

interface GlobalGraphPageProp {
  syllabus: Syllabus;
}

const GlobalGraphPage = ({ syllabus }: GlobalGraphPageProp): React.JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _]: UseSearchParamsValue = useSearchParams();

  return (
    <>
      <HeadTitle pageName='グローバルグラフ' />

      <div className={style.page}>
        <GlobalGraphHeader />
        <GlobalGraphContainer 
          syllabus={syllabus}
          searchParams={searchParams}
        />
      </div>
    </>
  );
};

export default GlobalGraphPage;
