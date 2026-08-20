import GlobalGraphContainer from './components/GlobalGraphContainer';
import GlobalGraphHeader from './components/GlobalGraphHeader';
import Head from '../../components/head/Head';
import { type Syllabus } from '../../../data/syllabus';
import { type UseSearchParamsValue } from '../../../types/use-search-params-value';
import style from './GlobalGraphPage.module.css';
import { useSearchParams } from 'react-router';

interface GlobalGraphPageProp {
  syllabus: Syllabus;
}

const GlobalGraphPage = ({ syllabus }: GlobalGraphPageProp): React.JSX.Element => {

  const pageName = 'グローバルグラフ';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, _]: UseSearchParamsValue = useSearchParams();

  return (
    <>
      <Head pageName={pageName} />

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
