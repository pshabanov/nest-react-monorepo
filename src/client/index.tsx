import React from 'react'
import { createRoot } from 'react-dom/client'
import { DefaultLayout } from './layouts/Default.layout'
import { BrowserRouter } from 'react-router-dom'
import './assets/scss/app.scss'

const root = createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <BrowserRouter>
        <DefaultLayout/>
    </BrowserRouter>
)