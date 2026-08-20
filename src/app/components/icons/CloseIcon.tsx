interface CloseIconProp {
  className?: string;
}

const CloseIcon = ({ className }: CloseIconProp): React.JSX.Element => {
  return (
    <svg 
      className={className}
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(0.898608,0,0,0.898608,51.9128,51.9128)">
        <path d="M396.46,512L-57.77,57.77L57.77,-57.77L512,396.46L966.23,-57.77L1081.77,57.77L627.54,512L1081.77,966.23L966.23,1081.77L512,627.54L57.77,1081.77L-57.77,966.23L396.46,512Z"/>
      </g>
    </svg>
  );
};

export default CloseIcon;
