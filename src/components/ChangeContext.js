import { useContext } from 'react'
import { AppContext } from "../contexts/AppContext"

const ChangeContext = () => {
    const { count, setCount } = useContext(AppContext)
    console.log(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add value to count</button>
        </div>
    )
}

export default ChangeContext