import {Link} from "react-router-dom";

function DetailsPage() {
  return (
      <div className={"container"}>
        <h1>Details Page</h1>
        <Link to="/">Back</Link>
      </div>
  );
}

export default DetailsPage;