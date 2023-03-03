import { useContext } from "react";
import ActivitiesList from "../components/table/ActivitiesList";
import { AppContext } from "../context/UserProvider";
import DashboardManager from "./DashboardManager";



export default function DashboardManagerActivityList() {

  const { role, id } = useContext(AppContext)

  return (

    <>
      <DashboardManager>
        <section className="title-page">
          <h1>List of maintenance activities</h1>
        </section>
        <ActivitiesList role={ role } id={ id } />
      </DashboardManager>
    </>
  )
}
