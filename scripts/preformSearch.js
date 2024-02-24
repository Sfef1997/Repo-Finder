
import { setSearchResponse } from "./setSearchResponse"
import setLoadingState from "./setLoadingState"
import { setMessage } from "./setMessage"
const USERS_API = "https://api.github.com/search/users?q="

export const preformSearch = (elmentInput,isUserSelected) =>{
    const typeQuery = isUserSelected  ? "+type:user" : "+type:org"
     if(!elmentInput.trim()){
        setMessage(`Your Input is Empty fill its please`)
        return
    }
    else{
        setLoadingState(true)
        setMessage("")
        fetch(`${USERS_API}${elmentInput}${typeQuery}`)
        .then((result)=>result.json())
        .then((response)=> setSearchResponse(response.items))
        .finally(()=> setLoadingState(false) )
    }
}
