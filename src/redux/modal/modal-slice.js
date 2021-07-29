import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: 'none',
  reducers: {
    openModal: (state, { payload }) => payload,
    closeModal: (_, { payload }) => 'none',
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
