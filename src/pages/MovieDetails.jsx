import { useParams, useLocation, Link,Outlet } from "react-router-dom";
import { useEffect ,useState,Suspense } from "react";
import { BackLink } from "../components/BackLink/BackLink";
import fetchRequest from "httpRequest";
import MovieDetailsComponent from "components/MovieDetailsComponent/MovieDetailsComponent";
import LoadingBlock from "components/LoadingBlock/LoadingBlock";
import css from "../components/MovieDetailsComponent/MovieDetails.module.css"

const MovieDetails = () => {
  const { movie_id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const [details,setDetails] =useState(null);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

  useEffect(()=>
  { 
    const addDetails= async ()=>{  
      try {
        setIsLoading(true);
        const response =await fetchRequest("details",{page:1,movie_id:movie_id});
        setDetails(details=>response.data);
         } catch (error) {
          setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }  
    addDetails();
  },[movie_id]);  
  return (
    <main>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <LoadingBlock error={error} isLoading={isLoading}>
      {details&&<MovieDetailsComponent details={details}></MovieDetailsComponent>}
      </LoadingBlock>
      <div className={css["add-info"]}>
        <p>Additional information</p>
        <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;