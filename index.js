
console.log("sss")
import { elmentInput,submitBtn,selectedElmentInput } from "././scripts/Elements"
import { preformSearch } from "././scripts/preformSearch"



submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    preformSearch(elmentInput.value,selectedElmentInput.checked)
} )


/* 
[x]    Create preformSearch (searchInput,isUserSelected)
[x]    call preformSearch inside submit Element
    preformSearch
[x]     fetch Data
[x]     If ok then Show Data in the Page
TODO    If Not Show Error Message
*/
