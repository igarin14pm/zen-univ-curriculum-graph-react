interface ChevronLeftIconProp {
  className?: string;
}

const ChevronLeftIcon = ({ className }: ChevronLeftIconProp): React.JSX.Element => {
  return (
    <svg 
      className={className}
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
    >
      <g transform="matrix(-9.73072e-17,-1.58915,-1.79797,1.10094e-16,1575.42,1361.19)">
          <path d="M212.182,483.488L277.98,424.091L531.52,643.5L791.557,423.748L856.553,483.831L530.744,759.166L212.182,483.488Z"/>
      </g>
    </svg>
  );
};

export default ChevronLeftIcon;
