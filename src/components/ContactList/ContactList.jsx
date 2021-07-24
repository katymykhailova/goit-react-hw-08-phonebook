import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
import todosOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { Contacts, ContactsItem } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => dispatch(todosOperations.deleteContact(id))}
          />
        </ContactsItem>
      ))}
    </Contacts>
  );
}
