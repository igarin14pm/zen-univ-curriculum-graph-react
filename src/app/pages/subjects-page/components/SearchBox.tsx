import style from './SearchBox.module.css';

interface SearchBoxProp {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ setQuery }: SearchBoxProp): React.JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <label className={style.label} htmlFor="search-box">
        科目を検索
      </label>
      <input
        id="search-box"
        className={style.input}
        placeholder='検索'
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
