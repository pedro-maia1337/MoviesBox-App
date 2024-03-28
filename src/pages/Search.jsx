import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import useRequest from "../../hooks/useRequest"

import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"

import "./MoviesContainer.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const {getMovies} = useRequest()
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q");

  useEffect(() => {
    (async () => {
      const moviesUrl = `${searchURL}?${apiKey}&query=${query}`
      const data = await getMovies(moviesUrl)
      setMovies(data.results)
    })();
  }, [query])
  
  return (
    <div>
        <div className="container">
        <h1>Filmes encontrados:</h1>
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
          ) : <Loader/>}
        </div>
        </div>
    </div> 
  )
}

export default Search