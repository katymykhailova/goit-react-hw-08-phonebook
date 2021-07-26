import PropTypes from 'prop-types';
import { FiPhone, FiTrash2 } from 'react-icons/fi';
import Button from '../Button';
import { ContactsText } from './Contact.styled';
import { iconSize } from 'constants/index';

function Contact({ name, number, onDeleteContact, onChangeContact }) {
  return (
    <>
      <ContactsText onClick={onChangeContact}>
        <FiPhone size={iconSize.small} />
        {name}: {number}
      </ContactsText>
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
