import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function C2() {
  const { c2qs, c2ans, c2link } = useContext(ImgsContext)
  return (
    <>
      <Title title="C2"/>
      <Slider imgs={c2qs}/>
      <br /><br />
      <Slider imgs={c2ans}/>
      <br /><br />
      <div className="booklink">
      <a href={c2link}>Read book here</a>
      </div>
      <br /><br />
    </>
  )
}
