import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>
    }
])