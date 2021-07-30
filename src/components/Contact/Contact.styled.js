import styled from '@emotion/styled/macro';

export const ContactsText = styled.span`
  display: flex;
  flex-grow: 1;
  & svg {
    color: ${({ theme }) => theme.colors.grey};
    margin-right: 10px;
    @media screen and (max-width: 680px) {
      display: none;
    }
  }
`;

export const Number = styled.span`
  margin-right: 20px;
`;
export const Name = styled.span`
  flex-grow: 1;
`;
