import { useSelector, useDispatch } from 'react-redux';
import { FiUserPlus } from 'react-icons/fi';

import Contact from '../Contact';
import {
  contactsOperations,
  contactsSelectors,
  contactsActions,
} from '../../redux/contacts';
import { modalActions } from '../../redux/modal';
import Button from 'components/Button';
import { iconSize } from 'constants/index';

import { Contacts, ContactsItem, ContactsTitle } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onHandleClick = id => {
    dispatch(contactsActions.changecurrentContact(id));
    dispatch(modalActions.openModal('contact'));
  };

  return (
    <>
      {contacts.length > 0 && (
        <>
          <ContactsTitle>
            <h2>Contacts</h2>
            <Button
              type="button"
              onClick={() => {
                dispatch(contactsActions.changecurrentContact(''));
                dispatch(modalActions.openModal('newContact'));
              }}
              aria-label="add contact"
            >
              <FiUserPlus size={iconSize.small} />
            </Button>
          </ContactsTitle>
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
        </>
      )}
    </>
  );
}
