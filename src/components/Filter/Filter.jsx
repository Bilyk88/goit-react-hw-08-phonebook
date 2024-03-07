import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const updateFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div style={{ margin: '30px 0' }}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => updateFilter(e.target.value)}
      />
    </div>
  );
};
