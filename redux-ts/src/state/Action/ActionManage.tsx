import { ActionType } from "../Actions-type/Actions-type"


//interface loading
export interface SearchrepositoriLoadingAction{
    type: ActionType.SEARCH_REPOSITORIES
}
//interface sucess
export interface SearchRepositoriesSucessAction{
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
}
//interface error
export interface SearchRepositoriErrorAction{
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload:string
}

//type my actoins is received three interface !!
export type Action =SearchrepositoriLoadingAction| 
SearchRepositoriesSucessAction|
SearchRepositoriErrorAction  