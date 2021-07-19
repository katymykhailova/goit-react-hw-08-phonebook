import styled from '@emotion/styled/macro';

export const Contacts = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
  padding: 0;
  list-style: none;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
