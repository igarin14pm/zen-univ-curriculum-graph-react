import GlobalGraphContainer from './components/GlobalGraphContainer';
import GlobalGraphHeader from './components/GlobalGraphHeader';
import HeadTitle from '../../components/head/HeadTitle';
import { type Syllabus } from '../../../data/syllabus';
import style from './GlobalGraphPage.module.css';

interface GlobalGraphPageProp {
  syllabus: Syllabus;
}

const GlobalGraphPage = ({ syllabus }: GlobalGraphPageProp): React.JSX.Element => {
  return (
    <>
      <HeadTitle pageName='グローバルグラフ' />

      <div className={style.page}>
        <GlobalGraphHeader />
        <GlobalGraphContainer syllabus={syllabus} />
      </div>
    </>
  );
};

export default GlobalGraphPage;
