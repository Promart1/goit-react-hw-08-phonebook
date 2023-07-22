import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { logIn, logout, refreshUser, register } from '../AuthR/AuthOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isAuthError: false,
  isLoading: false,
};

const registerSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, _action) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [register.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [logIn.pending](state, _action) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [logIn.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [logout.pending](state, _action) {
      state.isLoading = true;
    },
    [logout.fulfilled](state, _action) {
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
      state.isAuthError = false;
      state.isLoading = false;
    },
    [logout.rejected](state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    [refreshUser.pending](state, _action) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state, _action) {
      state.isRefreshing = false;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  registerSlice.reducer
);

// export const authReducer = registerSlice.reducer;
