import NavigatePage from "../components/common/navigate/NavigatePage";
import EmployeeData from "../components/employee/EmployeeData";
import DashboardManager from "./DashboardManager";


export default function DashboardManagerEmployeeData() {


  return (
   
    <>
      <DashboardManager>
        <NavigatePage />
        <EmployeeData />
      </DashboardManager>
    </>
  )
}
