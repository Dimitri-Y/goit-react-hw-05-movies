import css from './CatalogItem.module.css'
import PropTypes from "prop-types";
import { useLocation, Link } from 'react-router-dom';

const CatalogItem=({title,id})=>{
    const location = useLocation();
    return(
        <li className={css["CatalogItem"]}>
            {title&&<Link to={`movies/${id}`} state={{ from: location }}>{title}</Link>}
        </li>);

}
CatalogItem.propTypes ={
    title: PropTypes.string,
    id: PropTypes.func.isRequired,
}

export default CatalogItem;