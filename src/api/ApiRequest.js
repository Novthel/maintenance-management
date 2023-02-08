const path = "http://localhost:8080/request-help/";
const token = localStorage.getItem("token");


export async function newRequestHelp(data){
    
    const { position, requestby, descriptionproblem, priority } = data;
   
    const result = await fetch( path + 'new', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ position, requestby, descriptionproblem, priority })
    }).then(res => res.json())
    return result
}

export async function getAllRequest(){
    const result = await fetch( path + 'all', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

export async function getRequireByPriority(priority){
    const result = await fetch( path + 'all/priority', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ priority })
    }).then(res => res.json())
    return result
}

export async function processRequest(data) {

    const { _id } = data;
    const result = await fetch( path + 'edit/' + _id, {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify({ data })
    }).then(res => res.json())
    return result
}


export async function getRequestById(id){
    const result = await fetch( path + 'all/' + id, {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}


