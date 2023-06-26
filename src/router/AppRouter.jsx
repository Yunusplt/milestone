import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import NewBlog from '../pages/NewBlog'
import About from '../pages/About'
import Login from '../pages/Login'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='blog' element={<PrivateRouter/>}>
                <Route path='new-blog' element={<NewBlog/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter