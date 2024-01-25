import { Link } from "react-router-dom";
import "./../styles/Overview.css";
function Overview() {
  return (
    <div>
      <header>EMPLOYEE MANAGEMENT SYSTEM</header>
      <div className="link-div">
        <div className="link-ul">
          <li className="nav-item">
            <Link className="link" to="/add">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/view">
              View
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/update">
              Update
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/delete">
              Delete
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Overview;
