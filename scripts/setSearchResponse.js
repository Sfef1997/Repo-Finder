
import { cardsElment } from "./Elements"

export const setSearchResponse = (data)=> {    
    let result = ``
    if(!data?.length){
       result = `<p> No results Found </p>`
    }
    else if(data === null) {
        result = ``
    } else if(data?.length > 0 ){
    data.map(item=> {
    result +=
    `<article class="card">
            <img class = "img" loading = "lazy" src ="${item.avatar_url}" />
            <h2  class="name">${item.login} </h2>  
    </article>`
    }) 
     
    }
     cardsElment.innerHTML = result
}
