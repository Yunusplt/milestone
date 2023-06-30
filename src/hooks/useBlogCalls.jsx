import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { getCategorySuccess, getNewBlogSuccess } from '../features/blogSlice'



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


    return {getCategoryData, postNewBlog}
}

export default useBlogCalls