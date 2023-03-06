import React, {useState, ChangeEvent} from 'react'
 
 const RepositoriesList: React.FC  = () => {
 
    const [ term, setTerm] = useState<string>("")
    
    const Handle = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
    }
    
  return  <div>
        <form onSubmit={Handle} >
            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search My date</button>
        </form>
    </div>
}
export default RepositoriesList