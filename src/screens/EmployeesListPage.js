import React from 'react';

import Header from '../components/Header';
import EmployeeList from '../components/EmployeeList';
import Pagination from '../components/Pagination';

const EmployeesListPage = () => {
  return (
    <div>
      <Header>List of employees</Header>
      <Pagination/>
      <EmployeeList/>
    </div>
  );
};

export default EmployeesListPage;
