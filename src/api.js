import {toast} from 'react-toastify';

 function request(path, {data = null, token = null, method = "GET"}) {
    return fetch(path, {
        method,
        headers: {
            Authorization: token ? `Token ${token}` : "",
            "Content-type": "application/json"
        },
        body: method !== "GET" && method !== "DELETE" ? JSON.stringify(data) : null
    })
    .then((res)=>{
     

        if(res.ok) {
            if(method === "DELETE") {
                return true
            }
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
        toast(e.message, {type: "error"});
    })
}

export function signIn(username, password) {
    return request("/auth/token/login", {
        data: {username, password},
        method: "POST"
    })
}

export function register(username, password) {
    return request("/auth/users/", {
        data: {username, password},
        method: "POST"
    })
}

