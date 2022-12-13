import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/scss/app.scss'
import { router } from './router'

const root = createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
   <RouterProvider router={router}/>
)