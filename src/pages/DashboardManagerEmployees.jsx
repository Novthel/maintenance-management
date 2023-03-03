import NavigatePage from "../components/common/navigate/NavigatePage";
import Employees from "../components/table/Employees";
import DashboardManager from "./DashboardManager";


export default function DashboardManagerEmployees() {

  return (

    <>
      <DashboardManager>
        <section className="title-page">
          <h1>Employee list</h1>
        </section>
        <NavigatePage />
        <Employees />
      </DashboardManager>
    </>
  )
}
