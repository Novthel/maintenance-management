
import MenuDashboard from "../components/menu/MenuDashboard";
import NotificationDetail from "../components/Formrequest/NotificationDetail";
import Sidebar from "../components/sidebar/Sidebar";



export default function DashboardManagerNotificationDetail() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <NotificationDetail />
          </section> 
        </section> 
    </div>
  )
}
