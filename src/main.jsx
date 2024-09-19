import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import {CodeEditorWindow, CodingPage} from './Components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<App />} />
      <Route path='code' element = {<CodingPage />} />
      <Route path='*' element = {<div>Page Not Found</div>} />
    </Route>
  )  
);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
