import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { getBlogDetSuccess, getCategorySuccess, getCommentSuccess, getModUpdateSuccess, getNewBlogSuccess, getNewCommentSuccess } from '../features/blogSlice'



const useBlogCalls = () => {
    const dispatch = useDispatch()
    const token = "7729c2e15a82d096fd58a0231eab62537b6d2dd1";
    

    const getCategoryData = async ()=>{
        dispatch(fetchStart())
        try {
            const { data } = await axios.get(
              "http://35113.fullstack.clarusway.com/api/categories/"
            );
            dispatch(getCategorySuccess(data))

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const postNewBlog = async (values)=>{
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(
              "http://35113.fullstack.clarusway.com/api/blogs/",values,{
               headers: { Authorization: `Token ${token}` },
}
            );
            dispatch(getNewBlogSuccess(data))
        } catch (error) {
            dispatch(fetchFail)
        }
    }

    
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
          //  dispatch(getNewCommentSuccess(data));
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

    return {
      getCategoryData,
      postNewBlog,
      getBlogDetailData,
      postNewComment,
      getComments,
    };
}

export default useBlogCalls