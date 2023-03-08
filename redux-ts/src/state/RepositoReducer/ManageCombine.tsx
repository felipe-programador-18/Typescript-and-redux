import { combineReducers } from "redux";
import repositoriesreducer from './Repositories.reducers'


const reducer =combineReducers ({
  repositories: repositoriesreducer
})

export default reducer;
// I have to return my type that I want to receive !!
export type RootState= ReturnType<typeof reducer>