import ScrollToTopLink from '../../link/ScrollToTopLink';
import logoImage from '../img/logo.svg';
import style from './SiteName.module.css';

const SiteName = (): React.JSX.Element => {
  return (
    <ScrollToTopLink to="/" className={style.siteNameLink}>
      <div>
        <img className={style.siteLogo} src={logoImage} alt="ZEN大 カリキュラム・グラフのロゴ" />
        <h1 className={style.siteNameText}>
          ZEN大<br />
          カリキュラム・グラフ
        </h1>
      </div>
    </ScrollToTopLink>
  );
};

export default SiteName;
