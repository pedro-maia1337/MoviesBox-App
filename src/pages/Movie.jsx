import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import useRequest from "../../hooks/useRequest";

import { FaStar } from "react-icons/fa";

import Loader from "../components/Loader";


import "./Movie.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const {getMovies} = useRequest()
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const imagesURL = import.meta.env.VITE_API_IMG

  useEffect(() => {
    (async () => {
      const movieUrl = `${moviesURL}${id}?${apiKey}`
      const data = await getMovies(movieUrl)
      setMovie(data)
    })();
  }, [])

  return (
    <div>
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
    </div> 
  )
}

export default Movie