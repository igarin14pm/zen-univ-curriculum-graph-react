import style from './MainBlock.module.css';

interface MainBlockProps {
  children: React.ReactNode;
  title: string;
}

const MainBlock = ({ children, title }: MainBlockProps): React.JSX.Element => {
  return (
    <main className={style.container}>
      <h1 className={style.pageTitle}>{title}</h1>
      {children}
    </main>
  );
};

export default MainBlock;
