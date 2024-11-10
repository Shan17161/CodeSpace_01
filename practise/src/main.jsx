import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Github, { GithubLoader } from './components/Github/Github'
import Layout from './Layout.jsx'
import { Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/github",
//         element: <Github/>
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
        
      </Route>
      <Route path='/about/:username' element={<User/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route loader={GithubLoader} path='/github' element={<Github/>}/>
      <Route path='/user' element={<User/>}>
        <Route path='/user/:username' element={<User/>}/>
      </Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
