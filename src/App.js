import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import DepartmentFilter from './components/DepartmentFilter';
import EmployeeList from './components/EmployeeList';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(0);
  const [data, setData] = useState(null);

  const renderCondition = { err: error, load: !isLoaded };

  const getRenderMessage = (condition) => {
    let message = condition.err ? `${error.message}` : `Loading`;
    return message;
  };

  const handleChange = (e) => {
    setSelectedDepartment(parseInt(e.target.value));
  };

  const getFilteredEmployees = () => {
    const result =
      !selectedDepartment || selectedDepartment === 0
        ? data?.employees
        : data?.employees.filter((employee) => employee.departmentId === selectedDepartment);
    return result;
  };

  const filteredEmployees = useMemo(getFilteredEmployees, [selectedDepartment, data?.employees]);

  const fetchData = async () => {
    try {
      const [emplRes, deptRes] = await Promise.all([
        fetch('http://localhost:3001/employees'),
        fetch('http://localhost:3001/departments')
      ]);

      if (!emplRes.ok) {
        throw new Error(`Employees fetch err: The status is ${emplRes.status}`);
      }

      if (!deptRes.ok) {
        throw new Error(`Departments fetch err: The status is ${deptRes.status}`);
      }

      const employees = await emplRes.json();
      const departments = await deptRes.json();

      setData({ employees, departments });
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return renderCondition?.err || renderCondition?.load ? (
    <div>{getRenderMessage(renderCondition)}</div>
  ) : (
    <div className="App">
      <header>
        <h1>Employee list</h1>
      </header>
      <div className="Content" data-testid="content">
        <DepartmentFilter departments={data?.departments} onChange={handleChange} />
        <EmployeeList
          employees={filteredEmployees}
          departments={data?.departments}
          selectedDepartment={selectedDepartment}
        />
      </div>
    </div>
  );
}

export default App;
