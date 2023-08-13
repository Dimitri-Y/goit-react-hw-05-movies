import { ThreeDots} from 'react-loader-spinner'
import PropTypes from "prop-types";

const LoadingBlock = ({error,children,isLoading}) => {
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
          {children}
          </div>);
}
LoadingBlock.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
}
export default LoadingBlock;