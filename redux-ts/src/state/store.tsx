import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'

import reducers from "./RepositoReducer/Repositories.reducers"

export const store = createStore(reducers,applyMiddleware(thunk))