import MainScreen from './MainScreen'
import Sidebar from './Sidebar'
import '../CSS/Layout.css';

const Layout = () => {
  return (
    <>
        <div>
            <Sidebar />
        </div>
        <div className='main'>
            <MainScreen/>
        </div>
    </>
  )
}

export default Layout