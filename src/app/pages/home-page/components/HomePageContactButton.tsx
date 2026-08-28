import ChevronRightIcon from '../../../components/icons/ChevronRightIcon';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import style from './HomePageContactButton.module.css';

const HomePageContactButton = (): React.JSX.Element => {
  return (
    <ScrollToTopLink className={style.anchor} to="/contact">
      <div className={style.button}>
        <p className={style.text}>お問い合わせ</p>
        <ChevronRightIcon className={style.chevron} />
      </div>
    </ScrollToTopLink>
  );
};

export default HomePageContactButton;
