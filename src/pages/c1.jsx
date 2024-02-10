import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'

import { ImgsContext } from '../context/imgs'

export default function C1() {
  const { c1qs, c1link } = useContext(ImgsContext)
  return (
    <>
      <Title title="C1" />
      <Slider imgs={c1qs} />
      <br /><br />
      <div className="booklink">
        <a href={c1link}>Read book here</a>
      </div>
      <br /><br />
    </>
  )
}
