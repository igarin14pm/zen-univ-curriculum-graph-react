import style from './BreadcrumbList.module.css';

interface BreadcrumbListProps {
  isOnTop: boolean;
  children: React.ReactNode;
}

const BreadcrumbList = ({ isOnTop, children }: BreadcrumbListProps) => {
  return (
    <nav className={isOnTop ? style.breadcrumbListOnTop : style.breadcrumbList}>
      {children}
    </nav>
  );
};

export default BreadcrumbList;
