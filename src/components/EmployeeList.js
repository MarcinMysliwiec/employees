import React from 'react';

import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="employee-list-wrapper">
      {hits.map((employee) => {
        const { id, firstName, lastName, email } = employee;
        return (
          <article key={id} className="employee-list-item">
            <h4 className="title">{firstName} {lastName}</h4>
            <p className="info">
              {email}
            </p>
            <div>
              <Link to={`/details/${id}`}
                    className="read-link"
                    rel="noopener noreferrer">
                read more
              </Link>
              <button
                className="remove-btn"
                onClick={() => removeStory(id)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default EmployeeList;
