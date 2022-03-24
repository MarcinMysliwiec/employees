import {
  SET_LOADING,
  SET_EMPLOYEES,
  REMOVE_EMPLOYEE,
  HANDLE_PAGE,
  HANDLE_DETAILED_PAGE,
  SET_EMPLOYEE_DETAILS
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_EMPLOYEES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
      };
    case REMOVE_EMPLOYEE:
      if (isNaN(action.payload)) {
        return { ...state };
      }
      return {
        ...state,
        hits: state.hits.filter((employee) => employee.id !== action.payload),
      };
    case HANDLE_PAGE:
      if (isNaN(action.payload)) {
        return { ...state };
      }
      const currentPage = action.payload;
      const idStarts = ((currentPage - 1) * state.noofRecords) + 1;
      return {
        ...state,
        currentPage,
        idStarts
      };
    case HANDLE_DETAILED_PAGE:
      if (isNaN(action.payload)) {
        return { ...state };
      }
      return { ...state, employeeId: action.payload };
    case SET_EMPLOYEE_DETAILS:
      return {
        ...state,
        isLoading: false,
        employeeDetails: action.payload.hits[0]
      };
    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
