import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/login'
import Home from './components/Home'

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/home' element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;