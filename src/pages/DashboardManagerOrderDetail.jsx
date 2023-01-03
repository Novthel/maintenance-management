import MenuDashboard from "../components/menu/MenuDashboard";
import OrderDetail from "../components/orders/OrderDetail";
import Sidebar from "../components/sidebar/Sidebar";



export default function DashboardManagerOrderDetail() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <OrderDetail />
          </section> 
        </section> 
    </div>
  )
}
