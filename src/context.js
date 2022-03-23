import React, {useContext, useEffect, useReducer} from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hub.dummyapis.com/'

const initialState = {
  isLoading: true,
  hits: [],
  noofRecords: 10,
  idStarts: 1
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch({type: SET_LOADING})
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      dispatch({
        type: SET_STORIES,
        payload: {hits: data},
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch({type: REMOVE_STORY, payload: id})
  }
  const handlePage = (value) => {
    dispatch({type: HANDLE_PAGE, payload: value})
  }
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}employee?noofRecords=${state.noofRecords}&idStarts=${state.idStarts}`)
  }, [state.idStarts])

  return (
    <AppContext.Provider
      value={{...state, removeStory, handlePage}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
