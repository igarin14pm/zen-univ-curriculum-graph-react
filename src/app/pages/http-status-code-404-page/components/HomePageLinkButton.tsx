import ChevronRight from '../../../common-components/ChevronRight';
import { Link } from 'react-router';
import style from './HomePageLinkButton.module.css';

const HomePageLinkButton = (): React.JSX.Element => {
  return (
    <Link className={style.link} to="/">
      <div className={style.background}>
        <p className={style.text}>Home</p>
        <ChevronRight className={style.chevron}/>
      </div>
    </Link>
  );
};

export default HomePageLinkButton;
