import style from './PageContainer.module.css';

interface PageProp {
  children: React.ReactNode;
  title: string;
}

const PageContainer = ({ children, title }: PageProp): React.JSX.Element => {
  return (
    <main className={style.container}>
      <h1 className={style.pageTitle}>{title}</h1>
      {children}
    </main>
  );
};

export default PageContainer;
