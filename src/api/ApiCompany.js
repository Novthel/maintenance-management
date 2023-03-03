
const path = "http://localhost:8080/company/";
const token = localStorage.getItem("token");


export async function CompanyRegister (body) {

    const { names, lastnames, docUser, position, 
    phone, email, businessName, nit, foundation, sector, companyEmail, companyPhone,
    companyCellPhone, authorize } = body

    const result = await fetch( path + "new", {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify( { names, lastnames, docUser, position, 
            phone, email, businessName, nit, foundation, sector, companyEmail, companyPhone,
            companyCellPhone, authorize })
    }).then(res => res.json())
    return result
}

export async function getCompany(){
    const result = await fetch( path + 'all', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "GET"
    }).then(res => res.json())
    return result
}

export async function updateDataCompany(data){
   
    const result = await fetch( path + 'edit', {
        headers: { "content-type": "application/json",
        "authorization": `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify({ 
            data
        })
    }).then(res => res.json())
    return result
}
