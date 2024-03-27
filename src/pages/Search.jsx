import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"
import Message from "../components/Message"

import "./MoviesContainer.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [message, setMessage] = useState(null)
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
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
    const moviesUrl = `${searchURL}?${apiKey}&query=${query}`
    getSearchMovies(moviesUrl)
  }, [query])
  
  return (
    <div>
      {message ? <Message msg={message}/> : (
        <div className="container">
        <h1>Filmes encontrados:</h1>
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)
          ) : <Loader/>}
        </div>
        </div>
      )}
    </div> 
  )
}

export default Search