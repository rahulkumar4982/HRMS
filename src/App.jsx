import { Routes, Route } from "react-router-dom";

import EmployeeManagement from "./pages/EmployeeManagement";
import Attandance from "./pages/Attandance";

function App() {
  return (
    <Routes>

      <Route path="/Employees" element={<EmployeeManagement />} />

      <Route path="/attendance" element={<Attandance />} />

    </Routes>
  );
}

export default App;