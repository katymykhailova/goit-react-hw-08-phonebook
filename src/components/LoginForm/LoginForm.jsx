import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { authOperations } from '../../redux/auth';
import { Form, Input, Label, Error, Button } from './LoginForm.styled';

export default function RegisteForm() {
  const dispatch = useDispatch();

  const onHandleSubmit = data => {
    dispatch(authOperations.logIn(data));
  };

  const schema = yup.object().shape({
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
        e-mail
        <Input type="email" {...register('email')} />
        <Error>{errors.email?.message}</Error>
        Password
        <Input type="password" {...register('password')} autoComplete="off" />
        <Error>{errors.password?.message}</Error>
      </Label>
      <Button type="submit" disabled={!isDirty}>
        Log in
      </Button>
    </Form>
  );
}
