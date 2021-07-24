import { useEffect } from 'react';
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
import todosOperations from './redux/contacts/contacts-operations';
import { getLoading } from './redux/contacts/contacts-selectors';

export default function App() {
  const openedModal = useSelector(getOpenedModal);
  const isLoadingTodos = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(todosOperations.fetchContacts()), [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>

      <ContainerFilter>
        <Filter />
        <Button
          type="button"
          onClick={() => dispatch(modalActions.openModal('newContact'))}
          aria-label="add contact"
        >
          <FiUserPlus size={iconSize.small} />
        </Button>
      </ContainerFilter>

      <h2>Contacts</h2>
      {isLoadingTodos && <h3>Загружаем...</h3>}

      <ContactList />

      {openedModal === 'newContact' && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Section>
  );
}
