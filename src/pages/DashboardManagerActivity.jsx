import MenuDashboard from "../components/menu/MenuDashboard";
import Order from "../components/orders/Order";
import Sidebar from "../components/sidebar/Sidebar";



export default function DashboardManagerActivity() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <Order />
          </section> 
        </section> 
    </div>
  )
}
