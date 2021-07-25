// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import actions from './modal-actions';
import { createSlice } from '@reduxjs/toolkit';

// const type = createReducer('none', {
//   [actions.openModal]: (_, { payload }) => payload,
//   [actions.closeModal]: (_, { payload }) => 'none',
// });

// export default combineReducers({
//   type,
// });

const counterSlice = createSlice({
  name: 'modal',
  initialState: 'none',
  reducers: {
    openModal: (state, { payload }) => payload,
    closeModal: (_, { payload }) => 'none',
  },
});

export const { openModal, closeModal } = counterSlice.actions;
export default counterSlice.reducer;
