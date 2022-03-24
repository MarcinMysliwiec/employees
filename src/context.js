import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING, SET_EMPLOYEES, REMOVE_EMPLOYEE, HANDLE_PAGE, HANDLE_DETAILED_PAGE, SET_EMPLOYEE_DETAILS
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hub.dummyapis.com/';

const initialState = {
  isLoading: true, hits: [], noofRecords: 10, idStarts: null, currentPage: null, employeeId: null, employeeDetails: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (type, url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: type, payload: { hits: data },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_EMPLOYEE, payload: id });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  const handleDetailedPage = (value) => {
    dispatch({ type: HANDLE_DETAILED_PAGE, payload: value });
  };

  useEffect(() => {
    if (state.employeeId != null) {
      fetchData(SET_EMPLOYEE_DETAILS, `${API_ENDPOINT}employee?noofRecords=1&idStarts=${state.employeeId}`);
    }
  }, [state.employeeId]);

  useEffect(() => {
    if (state.currentPage != null) {
      fetchData(SET_EMPLOYEES, `${API_ENDPOINT}employee?noofRecords=${state.noofRecords}&idStarts=${state.idStarts}`);
    }
  }, [state.currentPage, state.noofRecords, state.idStarts]);

  return (<AppContext.Provider
    value={{ ...state, removeStory, handlePage, handleDetailedPage }}
  >
    {children}
  </AppContext.Provider>);
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
