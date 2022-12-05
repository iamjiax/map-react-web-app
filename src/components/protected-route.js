import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const {currentUser} = useSelector((state) => state.userReducer);
  console.log(currentUser)
  if (currentUser) {
    return (children);
  } else {
    return (<Navigate to={'/login'}/>);
  }
}
export default ProtectedRoute;