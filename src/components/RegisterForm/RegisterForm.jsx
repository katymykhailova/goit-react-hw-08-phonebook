import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { authOperations } from '../../redux/auth';

import { Form, Input, Label, Error, Button } from './RegisterForm.styled';

export default function RegisteForm() {
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(authOperations.register(data));
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
      ),
    email: yup
      .string()
      .required('Обязательное поле')
      .email('e-mail введен не корректно'),
    password: yup
      .string()
      .max(10, 'пароль слишком длинный')
      .min(5, 'пароль слишком короткий')
      .required('Обязательное поле')
      .matches(
        /[a-zA-Z0-9-]/,
        'Пароль может содержать только из латинских букв и цифр и тире',
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
        e-mail
        <Input type="email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        Password
        <Input type="password" {...register('password')} autoComplete="off" />
        <Error>{errors.password?.message}</Error>
      </Label>
      <Button type="submit" disabled={!isDirty}>
        Sign up
      </Button>
    </Form>
  );
}
