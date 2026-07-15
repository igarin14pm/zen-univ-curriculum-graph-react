import ChevronRight from '../../../common-components/ChevronRight';
import ScrollToTopLink from '../../../common-components/ScrollToTopLink';
import style from './HomePageLinkButton.module.css';

const HomePageLinkButton = (): React.JSX.Element => {
  return (
    <ScrollToTopLink className={style.link} to="/">
      <div className={style.background}>
        <p className={style.text}>Home</p>
        <ChevronRight className={style.chevron}/>
      </div>
    </ScrollToTopLink>
  );
};

export default HomePageLinkButton;
