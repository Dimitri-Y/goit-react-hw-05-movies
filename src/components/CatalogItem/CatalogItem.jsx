import css from './CatalogItem.module.css'
import PropTypes from "prop-types";

const CatalogItem=({title,id})=>{
    return(
        <li className={css["CatalogItem"]}>
        {title&&<a href="https://www.themoviedb.org/">{title} : {id}</a>}
      </li>);

}
CatalogItem.propTypes ={
    title: PropTypes.string,
    id: PropTypes.func.isRequired,
}

export default CatalogItem;