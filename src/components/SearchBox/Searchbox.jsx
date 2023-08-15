import {useState} from "react"
import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

export const SearchBox = ({onSubmit}) => {
  const [query,setQuery]=useState("");  
  const change=e=>{
    setQuery(e.target.value.trim())
  }
  const handleSubmit = evt => {
        evt.preventDefault();
        if(query.trim()===""){
          return window.alert("Uncorrect query");
        }
        onSubmit(query);
        setQuery('');
        }

    return (
    <form className={css["SearchForm"]} onSubmit={handleSubmit}>
    <input
      className={css["SearchForm-input"]}
      type="text"
      autoComplete="off"
      name="searchName"
      value={query}
      autoFocus
      placeholder="Search images and photos"
      onChange={change}
    />
        <button type="submit" className={css["SearchForm-button"]}>
      <span className={css["SearchForm-button-label"]}>Search</span>
    </button>

  </form>
  );
};

SearchBox.propTypes={
   onSubmit:PropTypes.func.isRequired, 
}