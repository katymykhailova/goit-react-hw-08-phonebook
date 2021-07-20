import { useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { Label, FilterInput } from './Filter.styled';

export default function Filter() {
  const onChange = useDispatch();
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        debounceTimeout={300}
        onChange={e => {
          onChange(contactsActions.changeFilter(e.target.value));
        }}
      />
    </Label>
  );
}
