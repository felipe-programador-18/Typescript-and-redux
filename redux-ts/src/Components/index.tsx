import {Provider} from 'react-redux'
import { store } from '../state/store'

import  RepositoriesList  from './repositories'


export const ManageApp = () => {


    return (<Provider store={store} >

     <h1>Learning more a bit about redux and typescript</h1>
     <h2>Search for repository</h2>
     <RepositoriesList/>
    </Provider>)
}