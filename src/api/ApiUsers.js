const path = "http://localhost:8080/";
const token = localStorage.getItem("token");

export async function Login (props) {
    const { password, username } = props;

    const result = await fetch( path + "login", {
        headers: { "content-type": "application/json"},
        method: "POST",
        body: JSON.stringify({ password, username })
    }).then(res => res.json())
    return result
}

export async function UserRegister (body) {

    const { names, lastnames, username, password, position, 
    phone, area, email, role, code } = body

    const result = await fetch( path + "users/new", {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify( { names, lastnames, username, password, position, 
            phone, area, email, role, code })
    }).then(res => res.json())
    return result
}

export async function getUser(id){
    if(id){
        const result = await fetch( path + 'users/' + id, {
            headers: { "content-type": "application/json",
            "authorization": `Bearer ${token}`
            },
            method: "GET"
        }).then(res => res.json())
        return result
    }
}

export async function getAllUser(){
    const result = await fetch( path + 'users/all', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

export async function getUserByRole(role){
    const result = await fetch( path + 'users/role', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ role })
    }).then(res => res.json())
    return result
}