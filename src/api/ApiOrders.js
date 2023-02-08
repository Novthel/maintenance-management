const path = "http://localhost:8080/orders/";
const token = localStorage.getItem("token");


export async function getAllOrders(){
    const result = await fetch( path + 'all', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

export async function getByOrderNumber(ordernumber){
    const result = await fetch( path + 'all/ordernumber', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ ordernumber })
    }).then(res => res.json())
    return result
}

export async function finishOrder(data) {

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

export async function newOrder(data){
    const { area, requestby, areasupervisor, descriptionproblem, priority, machine,
            ordernumber, activity, createby, asignateto, code, executed, spareparts,
            ordercreationdate, startdate, enddate, status, requirementdate } = data;

    const result = await fetch( path + 'new', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ 
            area, requestby, areasupervisor, descriptionproblem, priority, machine,
            ordernumber, activity, createby, asignateto, code, executed, spareparts,
            ordercreationdate, startdate, enddate, status, requirementdate
        })
    }).then(res => res.json())
    return result
}

export async function getOrderByStatus(status){
    const result = await fetch( path + 'all/status', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ status })
    }).then(res => res.json())
    return result
}

export async function getOrderById(id){
    const result = await fetch( path + 'all/' + id, {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
    }).then(res => res.json())
    return result
}


