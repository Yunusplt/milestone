import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart, registerSuccess } from '../features/authSlice'
import { useNavigate } from "react-router-dom"

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
      navigate("/blog");
    } catch (err) {
      dispatch(fetchFail());
    }
  };

return register
}

export default useAuthCalls

//todo userInfo Postmandaki body kismina denk geliyor. register sayfasinda InitialValues degerleri formdan cekildi. register(values) olarak gönderildi. buradan userInfo olarak karsilandi ve apiye gönderildi...

//? register islem olduktan sonra olmadan önce basmis oldugum sayfaya nasil gidilir?

//todo navigate tanimlanip navigate to "stock/blog" denirse ne olur????