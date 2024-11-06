import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


const Home = () => {

    const { count } = useContext(CounterContext);
    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {count}</p>
        </div>
    )
}

export default Home