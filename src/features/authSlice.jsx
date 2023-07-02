import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    image:null,
    email: null,
    bio : null,
    token: null,
    id: 0
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    registerSuccess: (state, {payload}) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.email=payload?.email;
      state.bio=payload?.bio;
      state.image=payload?.image
      state.token = payload?.token;
      state.error = false;
      state.id = payload?.id;
      console.log(state.bio);
    },
    loginSuccess: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload?.key;
      state.id = payload?.user.id
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;

// async-thunk yerine manuel dispatclerle yapıyoruz. extra reducerlarla yapmadan da bu şekilde yapabiliyoruz. İki yönteminde avantajı ve dezavantajı var.
