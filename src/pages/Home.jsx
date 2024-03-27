import { useState, useEffect } from "react"

import "./MoviesContainer.css"
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"
import Message from "../components/Message"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [movies, setMovies] = useState([])
  const [message, setMessage] = useState(null)

  const getTopMoviesRated = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (error) {
      setMessage('Houve erro com a conexão com o servidor')
      console.log(error)
    }
  }

  useEffect(() => {
    const moviesTopRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopMoviesRated(moviesTopRatedUrl)
  }, [])


  return (
    <div>
      {message ? <Message msg={message}/> : (
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
      )}  
    </div>
  )
}

export default Home