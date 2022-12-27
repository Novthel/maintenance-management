import { useState } from "react";
import MenuDashboard from "../components/menu/MenuDashboard";

import Sidebar from "../components/sidebar/Sidebar";
import ActivitiesList from "../components/table/ActivitiesList";



export default function DashboardManager() {

  const [view, setView] = useState(null);

  const mode = (props)=> {
    setView(props)
  }


  return (
    <div className="container pag-dashboard">

        <Sidebar />
        <section className="dashboard col-9">
          <MenuDashboard  mode={ mode } />

          <section className="container-dashboard">
          { view === 'activity' && <ActivitiesList /> }

          </section> 
        </section> 
    </div>
  )
}
