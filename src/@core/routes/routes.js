import Index from "@admin/layout/Index";
import { LoginPage } from "@admin/pages/login";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter(
    [
       {
            path:'',
            element: <p>website</p>
       },
       {
        path:'admin',
        element : <Index/>,
        children : [
            {
                index:true,
                element : <LoginPage />
            }
        ]
       },
       {
        path:'auth',
        element: <p>auth</p>
       }
    ]
)



export default routes;