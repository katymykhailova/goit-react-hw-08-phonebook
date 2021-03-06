import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Modal from 'components/Modal';
import { modalSelectors } from '../redux/modal';
import {
  contactsOperations,
  contactsActions,
  contactsSelectors,
} from '../redux/contacts';

export default function ContactsView() {
  const openedModal = useSelector(modalSelectors.getOpenedModal);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xl={4} xs>
          <h2>Filter</h2>
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              padding: '15px',
            }}
          >
            <Filter
              onHandleChange={contactsActions.changeNameFilter}
              text={'name'}
            />
            <Filter
              onHandleChange={contactsActions.changeNumberFilter}
              text={'number'}
            />
          </div>
        </Grid>
        <Grid item xs xl>
          {isLoadingContacts ? (
            <>
              <Skeleton animation="wave" height={100} />
              <Skeleton animation="wave" height={80} />
              <Skeleton animation="wave" height={80} />
              <Skeleton animation="wave" height={80} />
              <Skeleton animation="wave" height={80} />
            </>
          ) : (
            <ContactList />
          )}
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
