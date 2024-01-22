import axios, { AxiosHeaders } from "axios";  

let RegisterUS = (us , pw, callback) => {
    const jsondata = ({username: us, pw: pw})
    axios.post('' , jsondata , {
        headers: {
            'Content-Type':'application/json'
        }
    } ).then((respone) =>{
        callback
    }).catch((error) =>{
        console.log(error);
    })
}