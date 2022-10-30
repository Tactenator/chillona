import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div className="error">
            Sorry, but this page does not exist. Please return to <Link to ="/">Home</Link>
        </div>
     );
}
 
export default Error;