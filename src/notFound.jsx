import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="not-fond">
      <h1>Page not found</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Notfound;
