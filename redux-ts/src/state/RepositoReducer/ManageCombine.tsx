import { combineReducers } from "redux";
import repositoriesreducer from './Repositories.reducers'


const reducer =combineReducers ({
  repositories: repositoriesreducer
})

export default reducer;