import NavComponent from './components/navcomponent'
import Home from './components/homecomponent'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import VideoComponent from './components/videocomponent'
import HatAndTshirts from './components/hatandtshirt'
import About from './components/about'
import Tshirts from './components/tshirts'
import List from './components/listcomponent'
import ContactUs from './components/contactus'

export default function App() {
  return (
    <>
      <SmoothScrollProvider >
        <NavComponent />
        <Home />
        <VideoComponent />
        <HatAndTshirts />
        <Tshirts />
        <About />
        <List />
        <ContactUs />
      </SmoothScrollProvider>
    </>
  )
}