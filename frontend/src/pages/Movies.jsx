import Allmovies from '../components/Allmovies'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
const Movies = () => {

  return (
    <div>
      {/* <Navbar/> */}
      <Welcome/>
      <Allmovies/>
      <Footer/>

    </div>
  )
}

export default Movies