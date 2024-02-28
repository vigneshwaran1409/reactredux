import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

export const API_URL =  "https://65dee279ff5e305f32a0c350.mockapi.io/api/v1/reactredux";

function App() {

  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router}/>
  </>
}

export default App
