import { DebounceInput } from 'react-debounce-input';
import styled from '@emotion/styled/macro';

export const Label = styled.label`
  /* max-width: 400px; */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled(DebounceInput)`
  /* width: 345px; */
  margin: 10px 0 0 0;
  height: 30px;
  padding-left: 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
`;
