import React from 'react';
import { render, screen } from '@testing-library/react';
import DepartmentFilter from './DepartmentFilter';

test('does DepartmentFilter render ?', () => {
  render(
    <DepartmentFilter
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
    />
  );
  screen.debug();
});
