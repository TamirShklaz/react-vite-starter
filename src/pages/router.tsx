import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@/pages/layout.tsx";
import Home from "@/pages/home.tsx";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ]
    }
]);
