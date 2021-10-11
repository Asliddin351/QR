import {toast} from 'react-toastify';

export function signIn(username, password) {
    return fetch("/auth/token/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({username, password})
    })
    .then((res)=>{
        console.log(res);

        if(res.ok) {
            return res.json();
        }

        return res.json().then((json)=>{
            if(res.status === "404") {
                const errors = Object.keys(json).map(
                    (k)=> `${(json[k].join(" "))}`
                )
                throw new Error(errors.join(" "));
            }
            throw new Error(JSON.stringify(json))
        })
        .catch((e)=>{
            if(e.name === "SyntaxError") {
                throw new Error(res.statusText);
            }
            throw new Error(e)
        })
    })
    .then((json)=>{
        toast(JSON.stringify(json), {type: "success"})
    })
    .catch((e)=>{
        toast(e.message, {type: "success"});
    })
}