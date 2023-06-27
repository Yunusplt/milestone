import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    error: false,
    blogs: [],
    categories: [],
    products: [],
    purchases: [],
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
      console.log(payload);
      state.loading = false;
      state.categories = payload
      console.log(state.categories);
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
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;