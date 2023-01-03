import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import Store from "../components/table/Store";



export default function DashboardManagerStore() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <section className="title-page">
              <h1>Spare parts and tools list</h1>
            </section>
            <Store />
          </section> 
        </section> 
    </div>
  )
}
