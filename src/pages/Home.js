import useAppContext from '../hook/useAppContext'
import ChangeContext from '../components/ChangeContext'

const Home = () => {

    const { count } = useAppContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {count}</p>
            <ChangeContext />
        </div>
    )
}

export default Home