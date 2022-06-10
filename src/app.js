import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route exact path='/' element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;