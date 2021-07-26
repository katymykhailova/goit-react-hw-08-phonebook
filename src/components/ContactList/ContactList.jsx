import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact';
import {
  contactsOperations,
  contactsSelectors,
  contactsActions,
} from '../../redux/contacts';
import { openModal } from '../../redux/modal/modal-reducer';
import { Contacts, ContactsItem } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onHandleClick = id => {
    dispatch(contactsActions.changecurrentContact(id));
    dispatch(openModal('contact'));
  };

  return (
    <>
      {contacts.length > 0 && (
        <Contacts>
          {contacts.map(({ id, name, number }) => (
            <ContactsItem key={id}>
              <Contact
                name={name}
                number={number}
                onEditContact={() => onHandleClick(id)}
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
