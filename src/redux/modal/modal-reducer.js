import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './modal-actions';

const isOpen = createReducer(false, {
  [actions.openModal]: (_, { payload }) => true,
  [actions.closeModal]: (_, { payload }) => false,
});

export default combineReducers({
  isOpen,
});
