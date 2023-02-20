import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeList from './EmployeeList';

test('does EmployeeList render ?', () => {
  render(
    <EmployeeList
      departments={[
        {
          id: 1,
          departmentName: 'Technology consulting'
        },
        {
          id: 2,
          departmentName: 'Managed services'
        }
      ]}
      employees={[
        {
          id: 1,
          name: 'Hasnain Frame',
          age: 23,
          departmentId: 1,
          startDate: '2019-04-01',
          endDate: null
        },
        {
          id: 2,
          name: 'Sayed Morgan',
          age: 25,
          departmentId: 4,
          startDate: '2018-03-01',
          endDate: null
        }
      ]}
      selectedDepartment={1}
    />
  );
  screen.debug();
});
