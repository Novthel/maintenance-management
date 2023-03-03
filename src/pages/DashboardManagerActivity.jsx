import NavigatePage from "../components/common/navigate/NavigatePage";
import Order from "../components/orders/Order";
import DashboardManager from "./DashboardManager";


export default function DashboardManagerActivity() {

  return (
    <>
      <DashboardManager>
        <NavigatePage />
        <Order />
      </DashboardManager>
    </>
  )
}
