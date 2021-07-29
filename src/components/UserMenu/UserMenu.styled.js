import { FiUser } from 'react-icons/fi';
import styled from '@emotion/styled/macro';

export const UserSvg = styled(FiUser)`
  width: 25px;
  height: 25px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.span`
  display: block;
`;
export const UserEmail = styled.span`
  font-size: 12px;
  display: block;
`;
