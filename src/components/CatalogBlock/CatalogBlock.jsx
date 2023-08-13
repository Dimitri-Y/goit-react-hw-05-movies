import { ThreeDots} from 'react-loader-spinner'
import Catalog from "components/Catalog/Catalog";
import PropTypes from "prop-types";

export const CatalogBlock = ({error,catalog,isLoading}) => {
    return (
          <div>
            {error && <p>Whoops, something went wrong: {error.message}</p>}
           {isLoading && <div style={{display:'flex',alignContent:"center",justifyContent:"center"}}>
            <ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color="#ed3469" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
   />
            </div>}
          {catalog.length > 0 && <Catalog catalog={catalog}></Catalog>}
          </div>);
}
CatalogBlock.propTypes = {
    error: PropTypes.string.isRequired,
    catalog: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string,
        })
      ).isRequired,
    isLoading: PropTypes.bool.isRequired,
}