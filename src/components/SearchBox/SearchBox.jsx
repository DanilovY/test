import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const search = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const filter = (e) => dispatch(changeFilter(e.target.value));

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
