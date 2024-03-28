import { useState, useEffect } from "react"
import useRequest from "../../hooks/useRequest"

import "./MoviesContainer.css"
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const {getMovies} = useRequest()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      const moviesTopRatedUrl = `${moviesURL}top_rated?${apiKey}`
      const data = await getMovies(moviesTopRatedUrl)
      setMovies(data.results)
    })();
  }, [])

  return (
    <>
      <div className="container">
        <h1>Filmes mais bem avaliados</h1>
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))
          ) : <Loader/>}
        </div>
      </div>
    </>    
  )
}

export default Home