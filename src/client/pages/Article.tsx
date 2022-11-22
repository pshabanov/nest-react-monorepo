import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export const Article:FC = () => {

    const {name} = useParams()

    const [article, setArticle]  = useState<string>('')
    useEffect(()=>{
        fetch(`/api/article/${name}`)
            .then(response=>response.text())
            .then(article=>setArticle(article))
    }, [])

    return (
        <>
            <ReactMarkdown>{article}</ReactMarkdown>
        </>
    )
}