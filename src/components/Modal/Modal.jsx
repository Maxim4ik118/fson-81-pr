import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';

import style from './Modal.module.css';

export const Modal = ({ children, onCloseModal }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        {children}

        <button
          onClick={onCloseModal}
          type="button"
          className={style.modal__close}
        >
          <GrClose fontSize={'24px'} />
        </button>
      </div>
    </div>
  );
};
