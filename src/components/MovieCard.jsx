import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_API_IMG

const MovieCard = ({movie, showLink = true}) => {

  return (
    <div className="movie-container">
      <img src={imagesURL +  movie.poster_path} alt={movie.original_title} />
      <h2>{movie.original_title}</h2>
      <p>
        <FaStar fill="#F7D354" /> {movie.vote_average.toFixed(1)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard