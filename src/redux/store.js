import { configureStore, createReducer } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';
import modalReducer from './modal/modal-slice';
import authReducer from './auth/auth-slice';
import { contactsOperations } from './contacts';
import { authOperations } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const error = createReducer(null, {
  [contactsOperations.fetchContacts.pending]: () => null,
  [contactsOperations.fetchContacts.rejected]: (_, { payload }) => payload,
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.deleteContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.changeContact.pending]: () => null,
  [contactsOperations.changeContact.rejected]: (_, { payload }) => payload,
  [authOperations.register.pending]: () => null,
  [authOperations.register.rejected]: (_, { payload }) => payload,
  [authOperations.logIn.pending]: () => null,
  [authOperations.logIn.rejected]: (_, { payload }) => payload,
  [authOperations.logOut.pending]: () => null,
  [authOperations.logOut.rejected]: (_, { payload }) => payload,
  [authOperations.fetchCurrentUser.pending]: () => null,
  [authOperations.fetchCurrentUser.rejected]: (_, { payload }) => payload,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    modal: modalReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    error: error,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
