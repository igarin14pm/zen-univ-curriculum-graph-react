import style from './StatusCodeBlock.module.css';

const StatusCodeBlock = (): React.JSX.Element => {
  return (
    <pre className={style.pre}><code className={style.code}>404 Not Found</code></pre>
  );
};

export default StatusCodeBlock;
