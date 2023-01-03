
import EmployeeData from "../components/employee/EmployeeData";
import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";



export default function DashboardManagerEmployeeData() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <EmployeeData />
          </section> 
        </section> 
    </div>
  )
}
