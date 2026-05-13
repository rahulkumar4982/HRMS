import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className="sidebar"
    >
      <h1>HRMS</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "20px" }}>
  <Link to="/Employees" style={{ color: "white", textDecoration: "none" }}>
    Employees
  </Link>
</li>

<li style={{ marginBottom: "20px" }}>
  <Link
    to="/attendance"
    style={{ color: "white", textDecoration: "none" }}
  >
    Attendance
  </Link>
</li>
      </ul>
    </div>
  );
};

export default Sidebar;