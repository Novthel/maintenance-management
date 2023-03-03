const path = "http://localhost:8080/request-maintenance/";
const token = localStorage.getItem("token");

export async function newNotification(data){
    
    const { area, requestby, areasupervisor, descriptionproblem, priority, machine, notificationnumber } = data;
   
    const result = await fetch( path + 'new', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify({ 
            area, requestby, areasupervisor, descriptionproblem, priority, machine, notificationnumber
        })
    }).then(res => res.json())
    return result
}

// export async function getNotificationsByPriority(priority){
//     const result = await fetch( path + 'all/priority', {
//         headers: { "content-type": "application/json",
//         "authorization": `Bearer ${token}`
//         },
//         method: "POST",
//         body: JSON.stringify({ priority })
//     }).then(res => res.json())
//     return result
// }

export async function getAllNotifications(){
    const result = await fetch( path + 'all', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

// export async function getNotificationByStatus(status){
//     const result = await fetch( path + 'all/status', {
//         headers: { "content-type": "application/json",
//         "authorization": `Bearer ${token}`
//         },
//         method: "POST",
//         body: JSON.stringify({ status })
//     }).then(res => res.json())
//     return result
// }

export async function getNotificationsById(id){
    const result = await fetch( path + 'all/' + id, {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

export async function processNotification(data) {

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


