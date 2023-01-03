
import MenuDashboard from "../components/menu/MenuDashboard";
import CreateOrder from "../components/orders/CreateOrder";
import Sidebar from "../components/sidebar/Sidebar";



export default function DashboardManagerCreate() {



  return (
    <div className="container pag-dashboard">
        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
           <CreateOrder /> 
          </section> 
        </section> 
    </div>
  )
}
