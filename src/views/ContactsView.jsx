import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Modal from 'components/Modal';

import { modalSelectors } from '../redux/modal';
import { contactsOperations, contactsActions } from '../redux/contacts';

export default function ContactsView() {
  const openedModal = useSelector(modalSelectors.getOpenedModal);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs>
          <h2>Filter</h2>
          <Filter onHandleChange={contactsActions.changeNameFilter} />
          <Filter onHandleChange={contactsActions.changeNumberFilter} />
        </Grid>
        <Grid item xs={8}>
          <ContactList />
        </Grid>
      </Grid>
      {openedModal === 'newContact' && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      {openedModal === 'contact' && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Section>
  );
}
