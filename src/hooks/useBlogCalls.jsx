import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { getCategorySuccess } from '../features/blogSlice'



const useBlogCalls = () => {
    const dispatch = useDispatch()
    

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


    return getCategoryData
}

export default useBlogCalls