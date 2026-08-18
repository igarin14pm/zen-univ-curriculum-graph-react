import ChevronRightIcon from '../../../components/icons/ChevronRightIcon';
import ScrollToTopLink from '../../../components/link/ScrollToTopLink';
import style from './HomePageLinkButton.module.css';

const HomePageLinkButton = (): React.JSX.Element => {
  return (
    <ScrollToTopLink className={style.link} to="/">
      <div className={style.background}>
        <p className={style.text}>Home</p>
        <ChevronRightIcon className={style.chevron}/>
      </div>
    </ScrollToTopLink>
  );
};

export default HomePageLinkButton;
