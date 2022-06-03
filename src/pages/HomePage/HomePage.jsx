import {useState, useEffect} from 'react';
import styles from './home-page.module.css';
import {getTrends} from '../../shared/api/trend-movie'
import TrendsList from './TrendsList';

const HomePage = () =>{
    const [trends, setTrends] = useState({
        items: [],
        loading: false,
        error: null,
    });
    useEffect(()=> {
        const fetchTrends = async () => {
            try{
                setTrends(prevState =>( {...prevState,loading: true}))
                const data = await getTrends();
                setTrends(prevState=>({...prevState, loading:false, items: data.results }));
            }catch(error){
                setTrends(prevState => ({...prevState,loading: false, error: error.message}))
            }
        };
        fetchTrends()
    },[setTrends]);

    const {items, loading, error} = trends;

    return(
        <>
        <h1 className={styles.title_home}>Trending today:</h1>
        {loading && <p>...loading</p>}
        {error && <p>{error}</p>}
        <TrendsList items ={items}/>
        </>
    )
};

export default HomePage;