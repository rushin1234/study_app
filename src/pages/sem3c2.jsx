import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3C2() {
  const { sem3c2qs, sem3c2ans, sem3c2link } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 C2" />
      <Slider imgs={sem3c2qs} />
      <br /><br />
      <Slider imgs={sem3c2ans} />
      <br /><br />
      <div className="booklink">
        <a href={sem3c2link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
