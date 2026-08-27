import ChevronRightIcon from '../../../components/icons/ChevronRightIcon';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import style from './HomePageSubjectsButton.module.css';

const HomePageSubjectsButton = (): React.JSX.Element => {
  return (
    <ScrollToTopLink className={style.anchor} to="/subjects">
      <div className={style.button}>
        <p className={style.text}>科目</p>
        <ChevronRightIcon className={style.chevron} />
      </div>
    </ScrollToTopLink>
  );
};

export default HomePageSubjectsButton;
