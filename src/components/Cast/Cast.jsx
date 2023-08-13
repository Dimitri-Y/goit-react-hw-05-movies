import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import fetchRequest from "httpRequest";
import LoadingBlock from "components/LoadingBlock/LoadingBlock";

const Cast = () => {
    const { movie_id } = useParams();
  const [credits,setCredits] =useState(null);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  useEffect(()=>
  { 
    const addCredits= async ()=>{  
      try {
        setIsLoading(true);
        const response =await fetchRequest("credits",{movie_id:movie_id});
        setCredits(credits=>response.data);
         } catch (error) {
          setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }  
    addCredits();
  },[movie_id]); 
    return (
      <section>
        <LoadingBlock error={error} isLoading={isLoading}>
            {credits&&
            credits.cast.map(cast_one=>
                {
                    const urlImg=!cast_one.profile_path?"https://ru.hostings.info/upload/images/2021/12/e11044b915dc39afc3004430606bd6d1.jpg":`https://image.tmdb.org/t/p/w500/${cast_one.profile_path}`;    
                    return(<li key={cast_one.id}>
                    <img src={urlImg} alt={cast_one.name} width="100px"></img>
                    <p>{cast_one.name}</p>
                    <p>character: {cast_one.character}</p>
                </li>)}
                )}
        </LoadingBlock>
      </section>
    );
  };
  
  export default Cast;