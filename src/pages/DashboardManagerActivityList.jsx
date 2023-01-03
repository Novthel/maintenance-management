
import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import ActivitiesList from "../components/table/ActivitiesList";



export default function DashboardManagerActivityList() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <section className="title-page">
              <h1>List of maintenance activities</h1>
            </section>
            <ActivitiesList />
          </section> 
        </section> 
    </div>
  )
}
