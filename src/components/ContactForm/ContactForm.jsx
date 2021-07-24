import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import todosOperations from '../../redux/contacts/contacts-operations';
import modalActions from '../../redux/modal/modal-actions';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { Form, Input, Label, Error, Button } from './ContactForm.styled';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(todosOperations.addContact(data));
    dispatch(modalActions.closeModal());
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .notOneOf(
        contacts.map(contact => contact.name),
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
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        Add contacts
      </Button>
    </Form>
  );
}
