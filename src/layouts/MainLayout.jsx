import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
