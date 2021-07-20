import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { Contacts, ContactsItem } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const onDeleteContact = useDispatch();

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() =>
              onDeleteContact(contactsActions.deleteContact(id))
            }
          />
        </ContactsItem>
      ))}
    </Contacts>
  );
}
