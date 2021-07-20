import { useState, useEffect, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { FiUserPlus } from 'react-icons/fi';

import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Button from 'components/Button';
import Modal from './components/Modal';
import ContainerFilter from './components/ContainerFilter';
import { iconSize } from 'constants/index';

// import initialContacts from 'data/contacts.json';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  // });
  // const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  // const getVisibleContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // }, [contacts, filter]);

  // const deleteContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId),
  //   );
  // };

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: uuid(),
  //     name,
  //     number,
  //   };
  //   setContacts(contacts => [contact, ...contacts]);
  //   toggleModal();
  // };

  return (
    <Section>
      <h1>Phonebook</h1>

      <ContainerFilter>
        {/* <Filter filter={filter} onChange={changeFilter} /> */}
        <Filter />
        <Button type="button" onClick={toggleModal} aria-label="add contact">
          <FiUserPlus size={iconSize.small} />
        </Button>
      </ContainerFilter>

      <h2>Contacts</h2>

      {/* <ContactList
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      ></ContactList> */}
      <ContactList />

      {showModal && (
        <Modal onClose={toggleModal}>
          {/* <ContactForm onSubmit={addContact} contacts={contacts}></ContactForm> */}
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </Section>
  );
}
