import { useDispatch } from 'react-redux';
import { Label, FilterInput } from './Filter.styled';

export default function Filter({ onHandleChange, text }) {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by {text}
      <FilterInput
        type="text"
        debounceTimeout={300}
        onChange={e => {
          dispatch(onHandleChange(e.target.value));
        }}
      />
    </Label>
  );
}
