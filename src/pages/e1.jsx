
import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function E1() {
  const { e1qs, e1link } = useContext(ImgsContext)
  return (
    <>
      <Title title="E1"/>
      <Slider imgs={e1qs}/>
      <br /><br />
      <div className="booklink">
      <a href={e1link}>Read book here</a>
      </div>
      
      <br /><br />
    </>
  )
}
