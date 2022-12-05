import {useSelector} from "react-redux";
import {Navigate} from "react-router";

const ProtectedRoute = ({children}) => {
  const {currentUser} = useSelector((state) => state.userReducer);
  if (currentUser) {
    return (children);
  } else {
    return (<Navigate to={'/login'}/>);
  }
}
export default ProtectedRoute;