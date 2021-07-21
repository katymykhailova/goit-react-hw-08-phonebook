import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './modal-actions';

const type = createReducer('none', {
  [actions.openModal]: (_, { payload }) => payload,
  [actions.closeModal]: (_, { payload }) => 'none',
});

export default combineReducers({
  type,
});
