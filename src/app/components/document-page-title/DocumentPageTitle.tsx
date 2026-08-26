import style from './DocumentPageTitle.module.css';

interface DocumentPageTitleProps {
  isOnTop: boolean;
  children: React.ReactNode;
}

const DocumentPageTitle = ({ isOnTop, children }: DocumentPageTitleProps): React.JSX.Element => {
  return (
    <h1 className={isOnTop ? style.titleOnTop : style.title}>
      {children}
    </h1>
  );
};

export default DocumentPageTitle;
