import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Attandance = () => {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <div style={{ flex: 1 }}>
        
        <Navbar title="Attendance" />

        <div style={{ padding: "20px" }}>
          
        </div>

      </div>

    </div>
  );
};

export default Attandance;