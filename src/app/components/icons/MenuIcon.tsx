interface MenuIconProp {
  className?: string;
}

const MenuIcon = ({ className }: MenuIconProp): React.JSX.Element => {
  return (
    <svg 
      className={className}
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
    >
      <g>
        <g transform="matrix(1.00005,0,0,1.00005,-0.0280495,425.896)">
            <rect x="-0" y="25.503" width="1024" height="121.193"/>
        </g>
        <g transform="matrix(1.00005,0,0,1.00005,-0.0280495,817.296)">
            <rect x="-0" y="25.503" width="1024" height="121.193"/>
        </g>
        <g transform="matrix(1.00005,0,0,1.00005,1.7016e-10,34.4961)">
            <rect x="-0" y="25.503" width="1024" height="121.193"/>
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
