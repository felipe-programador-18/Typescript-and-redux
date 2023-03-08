import React, {useState, ChangeEvent} from 'react'
import { useSelector } from 'react-redux'
import { useSelectorHook } from '../Hooks/useTypeSelector'

import { useAction } from '../Hooks/useActions'



 const RepositoriesList: React.FC  = () => {

    const [term, setTerm] = useState<string>("")
    // destructing my useAction to facilitate
    const {SearchRepositories} = useAction()
    const {data, loading,error} = useSelector((state:any) => state.repositories)

    

    const Handle = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
      SearchRepositories((term)as any)
    }
    
  return  <div>
        <form onSubmit={Handle} >
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search My date</button>
        </form>
        {error && <h1>{error}</h1>}
        {loading && <h1>Loading ....</h1>}
        {!error && !loading &&
        data.map((dates:any) => <div key={dates} >{dates}</div> )
        }
    </div>
}
export default RepositoriesList