import { useSelector, useDispatch } from 'react-redux';
import { FiUserPlus } from 'react-icons/fi';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Button from 'components/Button';
import Modal from './components/Modal';
import ContainerFilter from './components/ContainerFilter';
import { iconSize } from 'constants/index';
import { getOpenedModal } from './redux/modal/modal-selectors';
import modalActions from './redux/modal/modal-actions';

export default function App() {
  const openedModal = useSelector(getOpenedModal);
  const toggleModal = useDispatch();

  return (
    <Section>
      <h1>Phonebook</h1>

      <ContainerFilter>
        <Filter />
        <Button
          type="button"
          onClick={() => toggleModal(modalActions.openModal('newContact'))}
          aria-label="add contact"
        >
          <FiUserPlus size={iconSize.small} />
        </Button>
      </ContainerFilter>

      <h2>Contacts</h2>

      <ContactList />

      {openedModal === 'newContact' && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Section>
  );
}
