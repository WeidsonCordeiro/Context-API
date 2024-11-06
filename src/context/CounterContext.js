//1-Criar Context

import { createContext, useState } from 'react'

export const CounterContext = createContext(null);

//2-Criar Provedor
export const CounterContextProvider = ({ clildren }) => {

    const [count, setCount] = useState(5);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {clildren}
        </CounterContext.Provider>
    )
}