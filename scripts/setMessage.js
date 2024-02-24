
import { messageElemnet } from "./Elements"


export const setMessage = (message)=> {

    messageElemnet.innerText = message ?   `${message}` : "" ;

}