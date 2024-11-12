import { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
    const [count, setCount] = useState(5);
    return (
        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider