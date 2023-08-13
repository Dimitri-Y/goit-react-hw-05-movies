import {useState,useEffect} from "react";
import fetchRequest from "httpRequest";
import LoadingBlock from "components/LoadingBlock/LoadingBlock";
import Catalog from "components/Catalog/Catalog";

const Home = () => {
    const [catalog,setCatalog] =useState([]);  
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

  useEffect(()=>
  { 
    const addCatalog= async ()=>{  
      try {
        setIsLoading(true);
        const response =await fetchRequest("trend",{page:1});
        setCatalog(catalog=>[...response.data.results]);
         } catch (error) {
          setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }  
    addCatalog();
  },[]);

    return (
      <main>
        <h2>Trending Today</h2>
        <LoadingBlock error={error} isLoading={isLoading}>
      {catalog.length > 0 && <Catalog catalog={catalog}></Catalog>}
      </LoadingBlock>
      </main>
    );
  };
export default Home;  