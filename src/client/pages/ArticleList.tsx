import React, { FC, useEffect, useState } from 'react'
import { ArticleListResponse } from '../../server/article/article.types'
import { Link } from 'react-router-dom'

export const ArticleList:FC = () => {

    const [articles, setArticles]  = useState<string[]>([])
    useEffect(()=>{
        fetch('/api/article/list')
            .then<ArticleListResponse>(response=>response.json())
            .then(articles=>setArticles(articles))
    }, [])

    return (
        <nav>
            <ul>
                {articles.map(article=>(
                    <li>
                        <Link to={`/article/${article}`}>{ article }</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}