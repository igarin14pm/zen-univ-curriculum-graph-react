import style from './Footer.module.css';

const Footer = (): React.JSX.Element => {
  return (
    <footer className={style.footer}>
      <small>&copy; Igarin 2026</small><br />
      <small><a href="/text/third-party-licenses.txt" target="_blank" rel="noopener noreferrer">オープンソースライセンス</a></small>
    </footer>
  );
};

export default Footer;
