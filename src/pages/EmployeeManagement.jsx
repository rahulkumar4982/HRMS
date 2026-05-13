import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmployeeTable from "../components/EmployeeTable";

const EmployeeManagement = () => {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={{ flex: 1 }}>
        
        <Navbar />

        <div style={{ padding: "50px" }}>
          <EmployeeTable />
        </div>

      </div>

    </div>
  );
};

export default EmployeeManagement;