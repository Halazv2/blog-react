import { Link } from "react-router-dom";
const NotFound = () => {

    return ( 
        <center>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">Back to HomePage </Link>
        </center>
     );
}
 
export default NotFound;