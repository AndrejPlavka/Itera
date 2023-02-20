import React from 'react';
import ListItem from './ListItem';

const EmployeeList = ({ employees, departments }) => {
  const getDepartmentName = (id) => {
    const name = departments
      .filter((department) => department.id === id)
      .map((name) => name.departmentName);
    return name;
  };

  return (
    <div className="Employee-List">
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <ListItem
                id={employee.id}
                name={employee.name}
                department={getDepartmentName(employee.departmentId)}
                data={employees}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
