export interface ChevronRightProp {
  className: string;
}

const ChevronRight = ({ className }: ChevronRightProp): React.JSX.Element => {
  return (
    <svg 
      className={className}
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      role="img"
    >
      <g transform="matrix(8.04358e-17,-1.31362,1.48623,9.10056e-17,-367.307,1234.61)">
        <path d="M212.182,483.488L277.98,424.091L531.52,643.5L791.557,423.748L856.553,483.831L530.744,759.166L212.182,483.488Z"/>
      </g>
    </svg>
  );
};

export default ChevronRight;
