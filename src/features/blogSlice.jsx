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
    sales: [],
    categories: [],
    //! statelerimizin isimleri ile endpointlerimizin isimlerini aynı verdik. Bunun sebebi tek bir reducerla tüm stateleri dinamik bir şekilde doldurabilelim.
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
    getCategorySuccess :(state, {payload})=>{
      state.loading = false;
      state.categories = payload
    },
    getNewBlogSuccess :(state, {payload})=>{
      console.log(payload);
      state.loading = false;
      state.blogs = [...state.blogs, {...payload} ]
      console.log(state.blogs);
    },
    getCommentSuccess :(state, {payload})=>{
      console.log(payload);
      state.loading = false;
      state.comments = payload
      console.log(state.blogs);
    },
    getBlogDetSuccess : (state,{payload})=>{
      console.log(payload);
      state.loading = false;
      state.detail = payload
      console.log(state.detail);
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
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;