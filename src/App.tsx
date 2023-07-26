import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  )
}

export default App
