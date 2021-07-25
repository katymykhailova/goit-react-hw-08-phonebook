import { createSlice } from '@reduxjs/toolkit';

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
