import { Link } from "react-router-dom";
import "./../styles/NavBar.css";
function NavBar() {
  return (
    <div>
      <div className="link-div1">
        <div className="link-ul1">
          <li className="nav-item1">
            <Link className="link1" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="link1" to="/add">
              Add
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="link1" to="/view">
              View
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="link1" to="/update">
              Update
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="link1" to="/delete">
              Delete
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
