import styled from '@emotion/styled/macro';

export const Form = styled.form`
  padding: 0;
`;

export const Label = styled.label`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Input = styled.input`
  margin: 10px 0;
  height: 30px;
  padding-left: 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px 28px;
  max-width: 200px;

  font-weight: 700;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.06em;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:disabled,
  &:disabled:hover {
    background-color: ${({ theme }) => theme.colors.disabledBlue};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const Error = styled.span`
  left: 400px;
  bottom: 0px;
  color: coral;
  margin-bottom: 10px;
`;
