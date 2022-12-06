import { createBrowserRouter } from "react-router-dom";
import CategoryField from "../Component/Courses/CategoryField";
import Courses from "../Component/Courses/Courses";
import Login from "../Component/Login/Login";
import SignUp from "../Component/Login/SignUp/SignUp";
import Root from "../Component/Root";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
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
                loader:async({params})=>{
                   return fetch(`http://localhost:3000/courses/category/${params.categoryId}`)
                },
                element:<CategoryField></CategoryField>
            }
        ]
    }
])