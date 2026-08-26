import style from './MainBlock.module.css';

interface MainBlockProps {
  children: React.ReactNode;
}

const MainBlock = ({ children }: MainBlockProps): React.JSX.Element => {
  return (
    <main className={style.container}>
      {children}
    </main>
  );
};

export default MainBlock;
