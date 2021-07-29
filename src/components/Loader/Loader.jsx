import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';
import RiseLoader from 'react-spinners/RiseLoader';

const overrideBarLoader = css`
  top: 65px;
  left: 0;
  position: absolute;
  z-index: 1200;

  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const override = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
`;

export function Loader() {
  return (
    <BarLoader
      color={'#343a40'}
      loading={true}
      css={overrideBarLoader}
      size={15}
    />
  );
}

export function ModalLoader() {
  return (
    <RiseLoader color={'#343a40'} loading={true} css={override} size={20} />
  );
}
