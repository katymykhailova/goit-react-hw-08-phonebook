import { DebounceInput } from 'react-debounce-input';
import styled from '@emotion/styled/macro';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
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
