import axios from "axios"

import { Action } from "../Action/ActionManage"
import { ActionType } from "../Actions-type/Actions-type"

const SearchRepositories = (term:string) => {
  
    return async (dispatch: any) => {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES
      })

      try {   
      } catch (error:any) {
       dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message
       })
      }
    
    
    }
}

export default SearchRepositories