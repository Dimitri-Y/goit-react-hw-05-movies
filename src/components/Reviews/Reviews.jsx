import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import fetchRequest from "httpRequest";
import LoadingBlock from "components/LoadingBlock/LoadingBlock";

const Reviews = () => {
    const { movie_id } = useParams();
  const [reviews,setReviews] =useState(null);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  useEffect(()=>
  { 
    const addCredits= async ()=>{  
      try {
        setIsLoading(true);
        const response =await fetchRequest("reviews",{movie_id:movie_id});
        setReviews(reviews=>response.data);
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
            {reviews?
              reviews.results.map(result=>{
        return(<li key={result.id}>
                  <h2>Author: {result.author}</h2>
                  <p>{result.content}</p>
              </li>)}):<p>We don't have any reviews for this movie</p>
            }
        </LoadingBlock>
      </section>
    )
  };
  export default Reviews;