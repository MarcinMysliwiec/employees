import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EmployeesListPage from './screens/EmployeesListPage';
import EmployeeDetailsPage from './screens/EmployeeDetailsPage';

function App () {
  return (
    <Router>
      <Routes>
        <Route name="EmployeeList" path="/">
          <Route path=":page" element={<EmployeesListPage/>}/>
          <Route path="" element={<EmployeesListPage/>}/>
        </Route>
        <Route name="EmployeeDetails" path="/details/:id" element={<EmployeeDetailsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
