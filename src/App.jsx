import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/leadership'
import Events from './pages/Events/events'
import Tracks from './pages/Tracks/tracks'
function App() {
  return (
    <>
     <div>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Leadership'element={<Leadership/>}/>
          <Route path='/Tracks'element={<Tracks/>}/>
          <Route path='/Events'element={<Events/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    
    </>
  );
}

export default App
