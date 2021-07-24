import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import modalActions from '../../redux/modal/modal-actions';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(modalActions.closeModal());
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(modalActions.closeModal());
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot,
  );
}

Modal.defaultProps = {
  onClose: () => null,
  children: null,
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};
