import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import Employees from "../components/table/Employees";



export default function DashboardManagerEmployees() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <section className="title-page">
              <h1>Employee list</h1>
            </section>
            <Employees />
          </section> 
        </section> 
    </div>
  )
}
