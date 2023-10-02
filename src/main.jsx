import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './MainRoot';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import Registration from './Components/registration/Registration';
import AuthProbidor from './ContexProbidor/authProbidor';
import Oders from './Components/Oders/Oders';
import PrivetRoot from './PrivetRoot/PrivetRoot';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/oders",
        element: <PrivetRoot> <Oders></Oders></PrivetRoot>

      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProbidor>

      <RouterProvider router={router} />

    </AuthProbidor>

  </React.StrictMode>,
)
