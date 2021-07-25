import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { Contacts, ContactsItem } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <Contacts>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <Contact
                name={name}
                number={number}
                onDeleteContact={() =>
                  dispatch(contactsOperations.deleteContact(id))
                }
              />
            </ContactsItem>
          ))}
        </Contacts>
      )}
    </>
  );
}
