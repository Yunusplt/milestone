import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { getBlogDetSuccess, getCategorySuccess, getCommentSuccess, getNewBlogSuccess, getNewCommentSuccess } from '../features/blogSlice'



const useBlogCalls = () => {
    const dispatch = useDispatch()
    const token = "7729c2e15a82d096fd58a0231eab62537b6d2dd1";
    

    const getCategoryData = async ()=>{
        dispatch(fetchStart())
        try {
            const { data } = await axios.get(
              "http://35113.fullstack.clarusway.com/api/categories/"
            );
            console.log(data);
            dispatch(getCategorySuccess(data))

        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }

    const postNewBlog = async (values)=>{
        console.log(values);
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(
              "http://35113.fullstack.clarusway.com/api/blogs/",values,{
               headers: { Authorization: `Token ${token}` },
}
            );
            console.log(data);
            dispatch(getNewBlogSuccess(data))
        } catch (error) {
            console.log(error);
            dispatch(fetchFail)
        }
    }

    
    const getBlogDetailData = async (blog) => {
        console.log(blog);
      dispatch(fetchStart());
      try {
        const { data } = await axios.get(
          `http://35113.fullstack.clarusway.com/api/blogs/${blog}/`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        console.log(data);
        dispatch(getBlogDetSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(fetchFail());
      }
    };

       const postNewComment = async (comm, idNo) => {
         console.log(comm);
         console.log(idNo);
         dispatch(fetchStart());
         try {
           const { data } = await axios.post(
             `http://35113.fullstack.clarusway.com/api/comments/${idNo}/`,
             comm,
             {
               headers: { Authorization: `Token ${token}` },
             }
           );
           console.log(data);
          //  dispatch(getNewCommentSuccess(data));
         } catch (error) {
           console.log(error);
           dispatch(fetchFail);
         }
       };
       const getComments = async (idNo) => {
         console.log(idNo);
         dispatch(fetchStart());
         try {
           const { data } = await axios.get(
             `http://35113.fullstack.clarusway.com/api/comments/${idNo}/`
           );
           console.log(data);
           dispatch(getCommentSuccess(data));
         } catch (error) {
           console.log(error);
           dispatch(fetchFail);
         }
       };

    return {
      getCategoryData,
      postNewBlog,
      getBlogDetailData,
      postNewComment,
      getComments,
    };
}

export default useBlogCalls