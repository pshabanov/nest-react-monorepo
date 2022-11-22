import { Link, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { ArticleList } from '../pages/ArticleList'
import { NotFoundPage } from '../pages/NotFoundPage'
import { Article } from '../pages/Article'

export const DefaultLayout = () =>{
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Главная</Link>
                        <Link to='/about'>О нас</Link>
                        <Link to='/articles'>Статьи</Link>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/article/:name' element={<Article/>}/>
                    <Route path='/articles' element={<ArticleList/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </header>

            <footer>
                Футер
            </footer>
        </>
    )
}