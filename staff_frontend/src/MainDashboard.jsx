import {Outlet} from "react-router-dom";
import Sidebar from './components/blocks/Sidebar'
import Topbar from './components/blocks/Topbar'
import Main from './components/blocks/Main'

export default function MainDashboard() {
  return (
    <>
    <Sidebar/>
    <Topbar/>
    <Main>
      <Outlet/>
    </Main>
    </>
  )
}
