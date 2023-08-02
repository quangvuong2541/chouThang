import axios from "axios"
import * as URLS from "./URL"
export default function API ( method,endPoint) {
    return axios ({
        method : method,
        url :  `${URLS.URL}/${endPoint}`,
       
    })
}

