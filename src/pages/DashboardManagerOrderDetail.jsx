import NavigatePage from "../components/common/navigate/NavigatePage";
import OrderDetail from "../components/orders/OrderDetail";
import DashboardManager from "./DashboardManager";



export default function DashboardManagerOrderDetail() {

  return (

    <>
      <DashboardManager>
        <NavigatePage />
        <OrderDetail />
      </DashboardManager>
    </>
  )
}
