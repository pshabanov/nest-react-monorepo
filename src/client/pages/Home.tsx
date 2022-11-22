import React, { FC, HTMLProps, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState<number>(0)
    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>hello from react! Count: { count }</h1>
            <Button updateData={ addCount }>Add to counter</Button>
        </>
    )
}

interface InputButtonProps extends HTMLProps<HTMLButtonElement> {
    updateData: Function
}

const Button: FC<InputButtonProps> = ({children, updateData}) => {
    return (
        <button onClick={ () => updateData() }>{ children }</button>
    )
}