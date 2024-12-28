import { Outlet } from 'react-router-dom'
import { Header } from '../Pages/Header/Header'

function Layout() {
  return (
    <div className="space-y-4 px-6 pt-6 ">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
