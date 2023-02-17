import React from 'react'

// thats the same if create obj without typescript
export interface InitialState{
   loading: boolean;
   error: string| null;
   data: string[]
}

const reducer = (state:InitialState, action:any):InitialState => {
  switch(action.type){
    case "search_repositories":
        return {loading:true, error:null, data:[]}
    case "search_repositories_success":
        return { loading:false, error:null,data:action.payload}
    case "search_repositories_error":
        return {loading:false, error: action.payload, data:[] }
    default:
    return state
  }

}


export default reducer

