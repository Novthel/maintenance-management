import Store from "../components/table/Store";
import DashboardManager from "./DashboardManager";



export default function DashboardManagerStore() {

  return (

    <>
      <DashboardManager>
        <section className="title-page">
          <h1>Spare parts and tools list</h1>
        </section>
        <Store />
      </DashboardManager>
    </>
  )
}
