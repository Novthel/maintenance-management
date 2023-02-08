import MenuDashboard from "../components/menu/MenuDashboard";
import Sidebar from "../components/sidebar/Sidebar";
import HelpList from "../components/table/HelpList";



export default function DashboardManagerHelpList() {


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-12 col-md-9">
          <MenuDashboard />
          <section className="container-dashboard">
            <section className="title-page">
              <h1>Request list</h1>
            </section>
            <HelpList />
          </section> 
        </section> 
    </div>
  )
}
