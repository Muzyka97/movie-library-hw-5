
import { useState, useEffect } from 'react';
import {getMovieById} from '../../shared/api/trend-movie';
import { useParams } from 'react-router-dom';

const MovieDetailsPage =() =>{
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: null
    });
    const {id} = useParams();

    useEffect(()=>{
        const fetchMovie = async(id)=> {
            try{
                setState(prevState =>( {...prevState,loading: true}))
                const data = await getMovieById(id);

                setState(prevState=>({...prevState, data, loading:false }));

            }catch({message}){
                setState(prevState=>({...prevState, error: message, loading:false }));
            }
        }
        fetchMovie(id)
    },[setState, id])


    const {data, loading, error} = state;
    const isData = Boolean(Object.values(data).length)


    return(
        <>
        <div>
            {loading && <p>...loading</p>}
            {error && <p>{error}</p>}
            {isData && (
                <>
                <h1>{data.name}</h1>
                <ul>
                    <li>{data.poster_path}</li>
                    <li>Overview: {data.overview}</li>
                    <li>Genres: {data.genres}</li>
                </ul>
                </>
            )}
        </div>
        </>
    )
}
export default MovieDetailsPage;
