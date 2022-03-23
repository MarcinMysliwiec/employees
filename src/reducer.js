import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
      }
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      }
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextId = state.idStarts + state.noofRecords
        return { ...state, idStarts: nextId }
      }
      if (action.payload === 'dec') {
        let prevId = state.idStarts - state.noofRecords
        return { ...state, idStarts: prevId }
      }
    default:
      throw new Error(`no mathching "${action.type}" action type`)
  }
}
export default reducer