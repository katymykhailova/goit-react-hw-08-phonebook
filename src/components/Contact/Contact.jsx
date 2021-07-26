import PropTypes from 'prop-types';
import { FiPhone, FiTrash2, FiEdit } from 'react-icons/fi';
import Button from '../Button';
import { ContactsText, Name, Number } from './Contact.styled';
import { iconSize } from 'constants/index';

function Contact({ name, number, onDeleteContact, onEditContact }) {
  return (
    <>
      <ContactsText>
        <FiPhone size={iconSize.small} />
        <Name>{name}</Name> <Number>{number}</Number>
      </ContactsText>
      <Button type="button" onClick={onEditContact} aria-label="edit contact">
        <FiEdit size={iconSize.small} />
      </Button>
      <Button type="button" onClick={onDeleteContact} aria-label="del contact">
        <FiTrash2 size={iconSize.small} />
      </Button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default Contact;
