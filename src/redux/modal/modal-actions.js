import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('modal/openModal');
const closeModal = createAction('modal/closeModal');

/* eslint-disable import/no-anonymous-default-export */
export default { openModal, closeModal };
