import NotificationList from "../components/table/NotificationList";
import DashboardManager from "./DashboardManager";



export default function DashboardManagerNotification() {

  return (

    <>
      <DashboardManager>
        <section className="title-page">
          <h1>Notification list</h1>
        </section>
        <NotificationList />
      </DashboardManager>
    </>
  )
}
