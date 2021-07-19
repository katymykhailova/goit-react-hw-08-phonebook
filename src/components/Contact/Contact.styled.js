import styled from '@emotion/styled/macro';

export const ContactsText = styled.span`
  & svg {
    color: ${({ theme }) => theme.colors.blue};
    margin-right: 10px;
  }
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
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
