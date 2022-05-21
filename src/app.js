import react from 'react'
import './style/app.css'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Buttons from './components/buttons/buttons';

const App = () => {
  return(
    <div id="app-container">
      <Header />
      <Buttons />
      <Footer />
    </div>
  )
}

export default App;