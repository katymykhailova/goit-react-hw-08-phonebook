import styled from '@emotion/styled/macro';

export const Contacts = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ContactsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
