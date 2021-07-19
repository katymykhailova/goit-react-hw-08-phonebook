import PropTypes from 'prop-types';

import Contact from '../Contact';

import { Contacts, ContactsItem } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </ContactsItem>
      ))}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
