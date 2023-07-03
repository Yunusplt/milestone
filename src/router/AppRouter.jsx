import React from 'react'
import { Route, Routes} from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import NewBlog from '../pages/NewBlog'
import About from '../pages/About'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Detail from '../pages/Detail'
import MyBlogs from '../pages/MyBlogs'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="my-blogs" element={<MyBlogs />} />
      <Route path="blog" element={<PrivateRouter />}>
        <Route path="new-blog" element={<NewBlog />} />
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default AppRouter