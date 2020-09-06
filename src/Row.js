import React, { useState, useEffect } from 'react';
import axios from './axios';
import './row.css'
// SCROLL DOESNOT WORK

const base_Url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]

    );



    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row-posters">
                {movies.map(movie => (
                    <img key={movie.id} className={`row-poster ${isLargeRow && "row-posterLarge"}`} src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>


        </div>
    )
}

export default Row;
