import useAppContext from '../hook/useAppContext'

const Home = () => {

    const { count } = useAppContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {count}</p>
        </div>
    )
}

export default Home