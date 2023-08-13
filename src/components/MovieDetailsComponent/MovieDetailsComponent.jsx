import css from './MovieDetails.module.css';
import { nanoid } from 'nanoid';

const MovieDetailsComponent=({details})=>{
    const urlImg=!details.poster_path?"https://ru.hostings.info/upload/images/2021/12/e11044b915dc39afc3004430606bd6d1.jpg":`https://image.tmdb.org/t/p/w500/${details.poster_path}`;
    return(
    <div className={css['movie']}>
          <img src={urlImg} alt={details.title} width="400px" className={css['img']}></img>
        <div>
        <h2>
            {details.title}
          </h2>
          <p>
           User Score: {details.vote_average.toFixed(1)*10} %
          </p>
          <h4>Overview </h4>
          <p>{details.overview}</p>
          <h4>Genres</h4>
          {details.genres.map(genre=><span className={css['genre-span']} key={nanoid()}>{genre.name}</span>)}
        </div>  
        </div>);

}
export default MovieDetailsComponent;