import { useDispatch } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import { Label, FilterInput } from './Filter.styled';

export default function Filter({ onHandleChange }) {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        debounceTimeout={300}
        // onChange={e => {
        //   dispatch(contactsActions.changeFilter(e.target.value));
        // }}
        onChange={e => {
          dispatch(onHandleChange(e.target.value));
        }}
      />
    </Label>
  );
}
