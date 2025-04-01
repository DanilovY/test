import s from "./SearchBox.module.css";

const SearchBox = ({ search, filter }) => {
  return (
    <div>
      <label className={s.box}>
        <div>Find contacts by name</div>
        <input
          className={s.input}
          type="text"
          value={search}
          placeholder="Your name..."
          onChange={filter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
