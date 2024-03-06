import './MovieCard.css'
import { FaMessage } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function MovieCard(props){
    return(
        <div className='container'>
            <div className='movie-image'>
                <img src={props.imgSrc}/>
            </div>
            <div className='movie-details'>
                <h2 className='movie-name'>{props.movieName}</h2>
                <p>Year of Release: {props.year}</p>
                <p>Director: {props.director}</p>
                <p>Time: {props.runtime}</p>
                <p>Geners: {props.gener}</p>
                <p className='movie-synopsis'>Synopsis: {props.synopsis}</p>
                <div className='card-icons'>
                    <FaShareAlt className='icon'/>
                    <FaHeart className='icon'/>
                    <FaMessage className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;