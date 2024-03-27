import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { FaStar } from "react-icons/fa";

import Loader from "../components/Loader";
import Message from "../components/Message";

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  const [message, setMessage] = useState(null)

  const imagesURL = import.meta.env.VITE_API_IMG

  const getMovie = async (url) => {
    try {
        const res =  await fetch(url)
        const data = await res.json()
        setMovie(data)    
      } catch (error) {
        setMessage('Houve erro com a conexão com o servidor')
        console.log(error)
      }
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  }, [])

  return (
    <div>
      {message ? <Message msg={message}/> : (
        <div className="movie-control">
        {movie ? (
          <>
            <div className="infos-container">
              <h1>{movie.title}</h1>
              <p>
                <FaStar fill="#F7D354"/> {movie.vote_average.toFixed(1)}
              </p>
              <p>{movie.release_date.slice(0, 4)} • {movie.runtime} mins</p>
              <p className="tagline">{movie.tagline}</p>
              <p>{movie.overview}</p>
            </div>
            <img src={imagesURL + movie.poster_path} alt={movie.title} />
          </>
        ) : <Loader/>}
      </div>
      )}
    </div> 
  )
}

export default Movie