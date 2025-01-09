import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from "./App.jsx"
import Layout from './Layout.jsx'
import './index.css'
import { CodingPage} from './Components/index.js'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<App />} />
      <Route path='code' element = {<CodingPage />} />
      <Route path='*' element = {<div className='text-white'>Page Not Found</div>} />
    </Route>
  ),
  { basename: '/V-Type/' }
);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
