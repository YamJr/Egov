import './App.css'
import Footer from "./Component/Footer/Footer"
import Header from './Component/Header/Header'
import Detail from './Component/Details/Detail'
import Business from './Component/Business/Business'
import Home from './Component/Home/Home'
import Education from './Component/Education/Educ'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Detail/>
      <Education />
      <Business />
     <Footer/>
    </>
  )
}

export default App
