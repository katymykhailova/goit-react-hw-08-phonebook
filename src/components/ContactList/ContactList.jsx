import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contact from '../Contact';
import contactsActions from '../../redux/contacts/contacts-actions';
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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
