import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function E2() {
  const { e2qs, e2ans } = useContext(ImgsContext)
  return (
    <>
      <Title title="E2" />
      <Slider imgs={e2qs}/>
      <br /><br />
      <Slider imgs={e2ans}/>
      <br /><br />
      <div className="booklink">
      <a href="#">Read book here</a>
      </div>
      
      <br /><br />
    </>
  )
}
