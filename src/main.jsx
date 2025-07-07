import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import { createElement } from 'react'
import User from './Component/User/User.jsx'
import Github, { githubinfoaloader } from './Component/Github/Github.jsx'
import Login from './Component/Login/Login.jsx'
import GetStarted from './Component/GetStarted/GetStarted.jsx'
import Privacy from './Component/Privacy.jsx'
import Terms from './Component/Terms.jsx'

// type 1 for routing
// const router = createBrowserRouter([
//   {
//     path :'/',
//     element: <Layout/>,
//     children:[
//       { path:"",
//         element:<Home/>
//       },
//       { path:"about",
//         element:<About/>
//       },
//       { path:"contact ",
//         element:<Contact/>
//       }
//     ]
//   }

// ])

//type 2 for routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
        loader={githubinfoaloader} 
        path='github' 
        element={<Github/>}>
      </Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='getstarted' element={<GetStarted/>}></Route>
      <Route path='privacy' element={<Privacy/>}></Route>
      <Route path='terms' element={<Terms/>}></Route>
      {/* <Route path="test" element={<TestComponent />} loader={testLoader} />
      <Route  
        path='coupons' 
        element={<Coupons/>}>
        
      </Route> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
