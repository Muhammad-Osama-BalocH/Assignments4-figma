
import Content from "./components/Content"
import FeaturedWorks from "./components/FeaturedWork"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

function Home (){
  return(
     <div>
       <Header/> 
      <HeroSection/>
      <Content/>
      <FeaturedWorks/>
      <Footer/>
    </div>
  )
}

export default Home;