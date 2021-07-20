import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
import contactsActions from '../../redux/contacts/contacts-actions';
import { Contacts, ContactsItem } from './ContactList.styled';

export default function ContactList() {
  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
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
