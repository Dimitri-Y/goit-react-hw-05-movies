import {useState,useEffect }from "react";
import { useSearchParams} from "react-router-dom";
import { SearchBox } from "../components/SearchBox/Searchbox";
import fetchRequest from "httpRequest";
import LoadingBlock from "components/LoadingBlock/LoadingBlock";
import Catalog from "components/Catalog/Catalog";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("query");
  const [catalog,setCatalog] =useState([]);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

  const onSubmit=value=>{
        setSearchParams({query:value});      
  } 
  useEffect(()=>{
    const addCatalog= async ()=>{  
        try {
          setIsLoading(true);
          const response =await fetchRequest("search",{page:1,searchQuery:searchName});
          setCatalog(catalog=>[...response.data.results]);
           } catch (error) {
            setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    addCatalog()
    },[searchName]);

  
  return (
    <main>
      <SearchBox onSubmit={onSubmit}/>
      <LoadingBlock error={error} isLoading={isLoading}>
      {catalog.length > 0 && <Catalog catalog={catalog}></Catalog>}
      </LoadingBlock>
    </main>
  );
};

export default Movies;