import { useParams, Link } from "react-router-dom";

const Logged = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Welcome {name}</h1>
      <Link to="/">
        <button>loggout</button>
      </Link>
    </div>
  );
};

export default Logged;
