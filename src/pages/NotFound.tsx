import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ color: "white" }}>
      404 Not Found
      <br />
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
    </div>
  );
}
