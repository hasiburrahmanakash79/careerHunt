import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ApplyJob from './components/ApplyJob/ApplyJob';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import PageNotFound from './components/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/apply",
        element: <ApplyJob></ApplyJob>
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`/featureJob.json${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
