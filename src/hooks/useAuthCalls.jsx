import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, logoutSuccess, registerSuccess,loginSuccess } from '../features/authSlice'
import { useNavigate } from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useAuthCalls = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "http://35113.fullstack.clarusway.com/users/register/",
        userInfo
      );
      console.log(data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
    }
  };

    const login = async (userInfo) => {
      dispatch(fetchStart());
      try {
        const { data } = await axios.post(
          "http://35113.fullstack.clarusway.com/users/auth/login/",
          userInfo
        );
        console.log(data);
        dispatch(loginSuccess(data));
        toastSuccessNotify("Login performed");
        navigate("/");
      } catch (err) {
        dispatch(fetchFail());
        toastErrorNotify("Login can not be performed");
      }
    };


  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(
        "http://35113.fullstack.clarusway.com/users/auth/logout/"
      );
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed")
    }
  };



return {register, logout,login}
}

export default useAuthCalls

//todo userInfo Postmandaki body kismina denk geliyor. register sayfasinda InitialValues degerleri formdan cekildi. register(values) olarak gönderildi. buradan userInfo olarak karsilandi ve apiye gönderildi...

//? register islem olduktan sonra olmadan önce basmis oldugum sayfaya nasil gidilir?

//todo navigate tanimlanip navigate to "stock/blog" denirse ne olur????