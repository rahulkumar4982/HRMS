import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>HRMS</h2>

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