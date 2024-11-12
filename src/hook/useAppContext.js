import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

const useAppContext = () => {
    const context = useContext(AppContext)

    if (context === 'undefined') {
        throw new Error('Não está dentrod do Context')
    }

    return context
}

export default useAppContext