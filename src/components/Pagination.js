import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Button from './Button';

const Pagination = () => {
  const { isLoading, idStarts, currentPage, noofRecords, handlePage } = useGlobalContext();
  const { page = 1 } = useParams();
  let navigate = useNavigate();

  const handleSubmit = (page) => {
    const followingPage = parseInt(page);
    handlePage(followingPage);
    navigate(`/${followingPage}`, { replace: true });
  }

  useEffect(() => {
    handlePage(parseInt(page));
  }, []);

  return (
    <div className="btn-wrapper">
      {idStarts > 1 &&
        <Button disabled={isLoading} onClick={() => handleSubmit(currentPage - 1)}>prev</Button>
      }
      <p>
        {parseInt((idStarts + noofRecords) / noofRecords)}
      </p>
      <Button disabled={isLoading} onClick={() => handleSubmit(currentPage + 1)}>next</Button>
    </div>
  );
};

export default Pagination;
