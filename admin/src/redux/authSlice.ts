import { createSlice } from "@reduxjs/toolkit";

// Helper function to load the state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (error) {
    console.error("Failed to load state from local storage:", error);
    return null;
  }
};

// Helper function to save the state to local storage
const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState);
  } catch (error) {
    console.error("Failed to save state to local storage:", error);
  }
};

// Load initial state from local storage or use default initial state
const initialState = loadStateFromLocalStorage() || {
  isAuth: false,
  user: null,
  isFetching: false,
  error: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    signupSuccess: (state) => {
      state.isFetching = false;
      state.isAuth = true;
      state.error = false;
    },
    signupFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    verificationStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    verificationSuccess: (state, action) => {
      state.isFetching = false;
      state.isAuth = true;
      state.error = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      saveStateToLocalStorage(state); // Save to local storage
    },
    verificationFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.token = null;
      saveStateToLocalStorage(state); // Save to local storage
    },
    updateUser: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      saveStateToLocalStorage(state); // Save to local storage
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailure,
  verificationStart,
  verificationSuccess,
  verificationFailure,
  logout,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;
