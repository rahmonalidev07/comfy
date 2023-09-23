// rrd
import { Outlet, useNavigation } from 'react-router-dom'
// components
import { Header, Navbar } from '../components'

// Loading
import Loading from '../components/Loading'

function HomeLayout() {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Header/>
      <Navbar/>
      {
        isPageLoading ? (
         <Loading/> 
        ): (
          <main className='align-elements'>
            <Outlet/>
          </main>
        )
      }
    </div>
  )
}

export default HomeLayout