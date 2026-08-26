import { Link } from 'react-router';

interface ScrollToTopLinkProps {
  children: React.ReactNode;
  className?: string;
  to: string;
}

const ScrollToTopLink = ({ children, className, to }: ScrollToTopLinkProps): React.JSX.Element => {
  const handleClick = (): void => {
    window.scrollTo(0, 0);
  };
  return (
    <Link className={className} to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
