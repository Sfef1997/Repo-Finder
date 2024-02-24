
import { loaderElement } from "./Elements";
import { setSearchResponse } from "./setSearchResponse";
export default  function (loadingState){
loaderElement.classList.toggle("hidden", ! loadingState)

loadingState && setSearchResponse(null)

}