import styled from '@emotion/styled/macro';

export const Contacts = styled.ul`
  /* display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px; */
  padding: 0;
  list-style: none;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
