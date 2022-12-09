import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { ArticleList } from '../pages/ArticleList'
import { NotFoundPage } from '../pages/NotFoundPage'
import { Article } from '../pages/Article'
import { Cart } from '../pages/Cart'

export const DefaultLayout = () =>{
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/article/:name' element={<Article/>}/>
                <Route path='/articles' element={<ArticleList/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    )
}