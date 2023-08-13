import {useState,useEffect} from "react";
import fetchRequest from "httpRequest";
import { CatalogBlock } from "components/CatalogBlock/CatalogBlock";

export const Home = () => {
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
        <CatalogBlock catalog={catalog} error={error} isLoading={isLoading}></CatalogBlock>
      </main>
    );
  };