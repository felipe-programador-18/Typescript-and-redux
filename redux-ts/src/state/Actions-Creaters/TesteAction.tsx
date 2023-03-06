import axios from "axios"
import { Dispatch } from "redux"
import { Action } from "../Action/ActionManage"
import { ActionType } from "../Actions-type/Actions-type"

export const SearchRepositories = (term:string) => {
  
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES
      })

      try {   
        const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
            params: {
             text: term
            }
        })

       const AddDates = data.objects((dates:any) => {
            return  dates.package.name
        })
        
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
            payload: AddDates
        })
       
      }catch (error:any) {
        dispatch({
         type: ActionType.SEARCH_REPOSITORIES_ERROR,
         payload: error.message
        })
      }
    
    
    }
}
