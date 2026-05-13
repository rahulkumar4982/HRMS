const EmployeeTable = () => {
  const employees = [
    {
      id: 1,
      name: "Rahul",
      department: "QA",
      salary: 30000,
    },
    {
      id: 2,
      name: "Aman",
      department: "HR",
      salary: 25000,
    },
  ];

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;