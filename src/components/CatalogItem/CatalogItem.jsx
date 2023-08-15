import css from './CatalogItem.module.css'
import PropTypes from "prop-types";
import { useLocation, Link } from 'react-router-dom';

const CatalogItem=({title,id})=>{
    const location = useLocation();
    const to = location.pathname==="/"?`movies/${id}`:`${id}`;
    return(
        <li className={title?css["CatalogItem"]:css["CatalogItem-disabled"]}>
            {<Link to={to} state={{ from: location }}>{title}</Link>}
        </li>);
}
CatalogItem.propTypes ={
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
}

export default CatalogItem;