import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloResponse } from '../common/HelloResponse'

const root = createRoot(
    document.getElementById('root') as HTMLElement,
)

const App = () =>{
    const [text, setText] = useState<string>('')
    useEffect(()=>{
        fetch('/api/hello')
            .then<HelloResponse>(response=>response.json())
            .then(res=>setText(res.text))
        },
        [])
    return (
        <h1>{text}</h1>
    )
}


root.render(<App/>)
