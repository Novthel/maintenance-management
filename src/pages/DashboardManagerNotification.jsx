
import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import NotificationList from "../components/table/NotificationList";



export default function DashboardManagerNotification() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <section className="title-page">
              <h1>Notification list</h1>
            </section>
            <NotificationList />
          </section> 
        </section> 
    </div>
  )
}
