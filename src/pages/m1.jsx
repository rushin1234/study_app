import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function M1() {
  const { m1qs, m1link } = useContext(ImgsContext)
  return (
    <>
      <Title title="M1" />
      <Slider imgs={m1qs}/>
      <br /><br />
      <div className="booklink">
      <a href={m1link}>Read book here</a>
      </div>
      
      <br /><br />
    </>
  )
}
