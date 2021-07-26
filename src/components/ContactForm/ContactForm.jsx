import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { getOpenedModal } from '../../redux/modal/modal-selectors';
import { closeModal } from '../../redux/modal/modal-reducer';
import { Form, Input, Label, Error, Button } from './ContactForm.styled';
import * as contactsAPI from '../../services/contactsApiService';

export default function ContactForm() {
  const dispatch = useDispatch();
  const openedModal = useSelector(getOpenedModal);
  const contacts = useSelector(contactsSelectors.getContacts);
  const contactId = useSelector(contactsSelectors.getCurrentContact);

  const [contact, setContact] = useState({});

  useEffect(() => {
    if (contactId) {
      contactsAPI.fetchContactById(contactId).then(setContact);
    }
  }, [contactId]);

  const onHandleSubmit = data => {
    dispatch(
      openedModal === 'contact'
        ? contactsOperations.changeContact({ id: contact.id, ...data })
        : contactsOperations.addContact(data),
    );
    dispatch(closeModal());
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .notOneOf(
        contacts
          .filter(({ id }) => id !== contactId)
          .map(contact => contact.name),
        // eslint-disable-next-line no-template-curly-in-string
        '${value} есть в контактах',
      )
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
      ),
    number: yup
      .string()
      .required('Обязательное поле')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
      ),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (contact) {
      for (const [key, value] of Object.entries(contact)) {
        setValue(key, value, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }, [contact, setValue]);

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <Label>
        Name
        <Input type="text" {...register('name')} />
        <Error>{errors.name?.message}</Error>
        <Input type="tel" {...register('number')} />
        <Error>{errors.number?.message}</Error>
      </Label>
      <Button type="submit" disabled={!isDirty}>
        {openedModal === 'contact' ? 'Save contact' : 'Add contacts'}
      </Button>
    </Form>
  );
}
