import { Link } from 'react-router';

interface ScrollToTopLinkProp {
  children: React.ReactNode;
  className?: string;
  to: string;
}

const ScrollToTopLink = ({ children, className, to }: ScrollToTopLinkProp): React.JSX.Element => {
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
