import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import EmployeeDetails from '../components/EmployeeDetails';
import { useGlobalContext } from '../context';

const EmployeeDetailsPage = () => {
  const { handleDetailedPage } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleDetailedPage(parseInt(id));
  }, []);

  const goBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div>
      <Header appendElement={<Button onClick={goBack}>back</Button>}>Employee</Header>
      <EmployeeDetails/>
    </div>
  );
};

export default EmployeeDetailsPage;
