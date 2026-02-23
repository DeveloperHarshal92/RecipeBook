import MainRoutes from './routes/MainRoutes'
import "./App.css"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-neutral-950 text-neutral-100 '>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App