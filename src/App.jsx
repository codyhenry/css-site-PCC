import Home from './screens/Home'
import NavBar from './components/Navbar'
import ContentContainer from './components/ContentContainer'

import './App.css'

function App() {
  
  return (
    <>
    <NavBar />
    <ContentContainer >
    <Home />
    </ContentContainer>
    </>
  )
}

export default App
