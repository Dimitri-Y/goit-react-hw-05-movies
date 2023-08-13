import {useState,useEffect }from "react";
import { useSearchParams} from "react-router-dom";
import { SearchBox } from "../components/SearchBox/Searchbox";
import fetchRequest from "httpRequest";
import { CatalogBlock } from "components/CatalogBlock/CatalogBlock";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get("query") ?? "";
  const [search,setSearch] = useState(""); 
  const [catalog,setCatalog] =useState([]);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
  const onSubmit=searchName=>{
    if(searchName.trim()!=="" && searchName.trim()!==search)
    {
        setSearch(searchName);      
    }
  } 
  useEffect(()=>{
    const addCatalog= async ()=>{  
        try {
          setIsLoading(true);
          const response =await fetchRequest("search",{page:1,searchQuery:search});
          setCatalog(catalog=>[...response.data.results]);
           } catch (error) {
            setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    addCatalog()
    },[search]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={searchName} updateQueryString={updateQueryString} onSubmit={onSubmit}/>
      <p>{search}</p>
      <CatalogBlock catalog={catalog} error={error} isLoading={isLoading}></CatalogBlock>
    </main>
  );
};

export default Movies;