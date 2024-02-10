import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function M2() {
  const { m2qs, m2ans, m2link } = useContext(ImgsContext)
  return (
    <>
      <Title title="M2" />
      <Slider imgs={m2qs} />
      <br /><br />
      <Slider imgs={m2ans} />
      <br /><br />
      <div className="booklink">
        <a href={m2link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
