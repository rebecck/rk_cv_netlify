// import PdfLink from "../PdfLink";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 id="title-name">R K</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="tag">
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="tag">
              Work
            </Link>
          </li>
          <li>
            <Link to="/education" className="tag">
              Education
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" className="tag">
              Contact
            </Link>
          </li> */}
          <li>
            <Link to="/projects" className="tag">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      {/* Could add icon to a component, but then I need to pass props */}
      <div className="icons">
        {/* <a
          href="https://se.linkedin.com"
          style={{ height: "28px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src="../../linkedin.png" />
        </a> */}
        {/* <a
          href="https://github.com"
          style={{ height: "28px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </a> */}
        {/* <img className="icon" src="../../code.svg" /> */}
        {/* <PdfLink /> */}
      </div>
    </header>
  );
}
