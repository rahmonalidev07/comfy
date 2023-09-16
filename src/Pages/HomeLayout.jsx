import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'

function HomeLayout() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default HomeLayout