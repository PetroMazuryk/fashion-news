import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/contacts/filtersSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { Button } from '../Button/Button';
import css from './SearchBar.module.css';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilterValue(value));
  };

  const clearFilter = () => {
    dispatch(setFilterValue(''));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter to search..."
        value={filter}
        onChange={handleFilterChange}
      />
      {filter && (
        <Button variant="clear" onClick={clearFilter}>
          Clear
        </Button>
      )}
    </div>
  );
};
