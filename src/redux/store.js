import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsR/contactsSlice';
import { filterReducer } from './FilterR/filterSlice';
// import { authReducer } from './registerSlice';
import { persistedAuthReducer } from './AuthR/registerSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
