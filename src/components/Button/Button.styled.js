import styled from '@emotion/styled/macro';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 10px;

  text-align: center;
  letter-spacing: 0.06em;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  & svg {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;
