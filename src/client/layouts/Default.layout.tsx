import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFoundPage'
import { Cart } from '../pages/Cart'

export const DefaultLayout = () =>{
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}