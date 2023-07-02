import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import {
  getBlogDetSuccess,
  getCategorySuccess,
  getCommentSuccess,
  getNewBlogSuccess,
  getSuccess,
  getUserSuccess,
  postLikeSuccess,
} from "../features/blogSlice";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

const useBlogCalls = () => {
  const dispatch = useDispatch();
  
  const {token} = useSelector((state)=>state.auth)

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://35113.fullstack.clarusway.com/api/blogs/"
      );
      const url = "blogs";
      dispatch(getSuccess({ data, url }));
    } catch (error) {}
  };

  const getCategoryData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "http://35113.fullstack.clarusway.com/api/categories/"
      );
      dispatch(getCategorySuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postNewBlog = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "http://35113.fullstack.clarusway.com/api/blogs/",
        values,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getNewBlogSuccess(data));
    } catch (error) {
      dispatch(fetchFail);
    }
  };

  const getBlogDetailData = async (blog) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `http://35113.fullstack.clarusway.com/api/blogs/${blog}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getBlogDetSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postNewComment = async (comm, idNo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `http://35113.fullstack.clarusway.com/api/comments/${idNo}/`,
        comm,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
    } catch (error) {
      dispatch(fetchFail);
    }
  };
  const getComments = async (idNo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `http://35113.fullstack.clarusway.com/api/comments/${idNo}/`
      );
      dispatch(getCommentSuccess(data));
    } catch (error) {
      dispatch(fetchFail);
    }
  };

  const putUpdateData = async (formValues, idNo) => {
    console.log(idNo);
    dispatch(fetchStart());
    try {
      const { data } = await axios.put(
        `http://35113.fullstack.clarusway.com/api/blogs/${idNo}/`,
        formValues,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log(data);
      dispatch(getBlogDetSuccess(data));
    } catch (error) {
      dispatch(fetchFail);
    }
  };

  const postLike = async (idNo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `http://35113.fullstack.clarusway.com/api/likes/${idNo}/`, null,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log(data);
      dispatch(postLikeSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };
  const deleteBlog = async (idNo) => {
    dispatch(fetchStart());
    try {
      await axios.delete(
        `http://35113.fullstack.clarusway.com/api/blogs/${idNo}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

    const getUserData = async (userID) => {
      dispatch(fetchStart());
      try {
        const { data } = await axios.get(
          `http://35113.fullstack.clarusway.com/api/blogs/?author=${userID}`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        console.log(data);
        dispatch(getUserSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(fetchFail);
      }
    };

  

  return {
    getBlogs,
    getCategoryData,
    postNewBlog,
    getBlogDetailData,
    postNewComment,
    putUpdateData,
    getComments,
    deleteBlog,
    getUserData,
    postLike,
  };
};

export default useBlogCalls;
