import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    categories: [],
    detail: [],
    comments: [],
    userDetail : [],
    like: ""
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },
    getCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
    getNewBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = [...state.blogs, { ...payload }];
    },
    getCommentSuccess: (state, { payload }) => {
      state.loading = false;
      state.comments = payload;
    },
    postLikeSuccess: (state, { payload }) => {
      state.loading = false;
      state.like = payload;
    },
    getBlogDetSuccess: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
    },
    getUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.userDetail = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  getCategorySuccess,
  getNewBlogSuccess,
  getBlogDetSuccess,
  getCommentSuccess,
  getUpdateSuccess,
  postLikeSuccess,
  getUserSuccess,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;