import { ActionType } from "../Actions-type/Actions-type";
import { Action } from "../Action/ActionManage";


// interface initial to State!!! 
export interface InitialState{
   loading: boolean;
   error: string| null;
   data: string[]
}

const reducer =(state:InitialState, action:Action):InitialState => {
    
  switch(action.type){
    case ActionType.SEARCH_REPOSITORIES :
        return {loading:true, error:null, data:[]}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS :
        return { loading:false, error:null,data:action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
        return {loading:false, error: action.payload, data:[] }
    default:
    return state
  }

}

export default reducer

