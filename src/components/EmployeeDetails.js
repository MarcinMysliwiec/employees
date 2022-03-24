import React from 'react';

import { useGlobalContext } from '../context';

const EmployeeList = () => {
  const { isLoading, employeeDetails } = useGlobalContext();
  const { id, firstName, lastName, email, age, dob, salary, contactNumber, address, imageUrl } = employeeDetails;

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <article key={id} className="employee-wrapper">
      <img
        src={`${imageUrl}`}
        alt={`image-${firstName}-${lastName}`}
        className="employee-avatar"
      />
      <div className="employee-details">

        <h3 className="title">{firstName} {lastName}</h3>

        <div className="info">
          <span>tel:</span>
          <a href={`tel:+${contactNumber}`}>{contactNumber}</a>
        </div>

        <div className="info">
          <span>email:</span>
          <a href={`mailto: ${email}`}>{email}</a>
        </div>

        <div className="info">
          <span>date of birth:</span>
          {dob} <strong>({age} years old)</strong>
        </div>

        <div className="info">
          <span>address:</span>
          {address}
        </div>

        <div className="info">
          <span>salary:</span>
          {salary}
        </div>
      </div>
    </article>
  );
};

export default EmployeeList;
