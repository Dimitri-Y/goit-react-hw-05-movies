import { useLocation} from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";

const NotFound = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    return (
      <section>
        <p>This page Not Found</p>
        <BackLink to={backLinkHref}>Go Back</BackLink>
        </section>
    )
  };
  export default NotFound;