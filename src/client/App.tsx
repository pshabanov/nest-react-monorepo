import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(
    document.getElementById('root') as HTMLElement,
)

const App = () =>{
    const [text, setText] = useState<string>('')

    return (
        <h1>hello from react!</h1>
    )
}


root.render(<App/>)
