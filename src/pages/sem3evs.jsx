import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'

import { ImgsContext } from '../context/imgs'

export default function SEM3EVS() {
  const { sem3evs } = useContext(ImgsContext)
  return (
    <>
      <Title title="EVS" />
      <Slider imgs={sem3evs} />
      <br /><br />
      <div className="booklink">
        <a href=''>Read book here</a>
      </div>
      <br /><br />
    </>
  )
}
