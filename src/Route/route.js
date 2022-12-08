import { createBrowserRouter } from "react-router-dom";
import CheackOut from "../Component/Courses/CheackOut";
import Content from "../Component/Courses/Content";
import Courses from "../Component/Courses/Courses";
import FilteredField from "../Component/Courses/FilteredField";
import Faq from "../Component/Faq/Faq";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/Login/SignUp/SignUp";
import Root from "../Component/Root";
import PrivateRoute from "./PrivateRoute";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },{
                path:'signup',
                element:<SignUp></SignUp>
            },{
                path:'courses',
                element:<Courses></Courses>
            },{
                path:'courses/category/:categoryId',
                loader:({params})=>{
                   return fetch(`https://coding-home-server-iftekhar2979.vercel.app/category/${params.categoryId}`)
                },
                element:<FilteredField></FilteredField>
            },{
                path:'/:courseId',
                loader:({params})=>{
                    return fetch(`https://coding-home-server-iftekhar2979.vercel.app/course/${params.courseId}`)
                },
                element:<Content></Content>
            },{
                path:'/cheackOut/:id',
                loader:({params})=>{
                    return fetch(`https://coding-home-server-iftekhar2979.vercel.app/course/${params.id}`)
                },
                element:<PrivateRoute><CheackOut></CheackOut></PrivateRoute>
            },{
                path:'faq',
                element:<PrivateRoute><Faq></Faq></PrivateRoute>
            }
        ],
    }
])