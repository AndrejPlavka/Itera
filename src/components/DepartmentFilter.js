import React from 'react';

const DepartmentFilter = ({ onChange, departments }) => {
  return (
    <div className="Department-Filter">
      <select onChange={onChange}>
        <option value={0}>All departments</option>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.departmentName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentFilter;
