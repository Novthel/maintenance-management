import HelpList from "../components/table/HelpList";
import DashboardManager from "./DashboardManager";



export default function DashboardManagerHelpList() {

  return (
 
    <DashboardManager>
      <section className="title-page">
        <h1>Request list</h1>
      </section> 
      <HelpList />
    </DashboardManager>
  )
}
