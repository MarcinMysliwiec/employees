import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, idStarts, noofRecords, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
      {idStarts > 1 &&
        <button disabled={isLoading} onClick={() => handlePage('dec')}>
          prev
        </button>
      }
      <p>
        {parseInt((idStarts + noofRecords) / noofRecords)}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons
