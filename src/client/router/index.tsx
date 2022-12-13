import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/Default.layout'
import { NotFoundPage } from '../pages/NotFoundPage'
import { Cart } from '../pages/Cart'


export const router = createBrowserRouter([
    {
        path: '',
        element: <DefaultLayout />,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
        ],
    },
        {
            path: '*',
            element: <NotFoundPage/>
        }

])