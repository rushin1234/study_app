import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import { ImgsContext } from './context/imgs'

const App = () => {

  const { current } = useContext(ImgsContext)

  return (
    <>
    <Navbar />
    <Slider imgs={current} />
    </>
  )
}

export default App