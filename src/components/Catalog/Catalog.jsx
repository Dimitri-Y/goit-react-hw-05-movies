import css from './Catalog.module.css'
import CatalogItem from "../CatalogItem/CatalogItem";
import PropTypes from "prop-types";

const Catalog =({catalog})=>{
  
  return(
    <ul className={css["catalog"]}>
      {catalog.map(({title,id})=>{
        return(
          <CatalogItem id={id} title={title} key={id}></CatalogItem>
      )}
      )
    }
  </ul>);
}
Catalog.propTypes={
  catalog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
}
export default Catalog;