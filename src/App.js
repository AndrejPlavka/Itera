import React, { useEffect, useState, useMemo } from 'react';
import DepartmentFilter from "./components/DepartmentFilter";
import EmployeeList from "./components/EmployeeList";
import axios from "axios";
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(0);
    
    const handleChange = (e) => {
        setSelectedDepartment(parseInt(e.target.value))
    }

    const getFilteredEmployees = () => {
        const result = !selectedDepartment || selectedDepartment === 0 ? employees : employees.filter(employee => employee.departmentId === selectedDepartment)
        return result
    }

    const filteredEmployees = useMemo(getFilteredEmployees, [selectedDepartment, employees])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/employees`)
            .then((res) => {
                setEmployees(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get(`http://localhost:3001/departments`)
            .then((res) => {
                setDepartments(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    },[]) 
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Employee list</h1>
            </header>
            <div className="Content">
                <DepartmentFilter departments={departments} onChange={handleChange}/>
                <EmployeeList employees={filteredEmployees} departments={departments} selectedDepartment={selectedDepartment}/>
            </div>
        </div>
    );
}

export default App;
