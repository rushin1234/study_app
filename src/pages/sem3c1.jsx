import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3C1() {
  const { sem3c1qs, sem3c1link, sem3c1ans } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 C1" />
      <Slider imgs={sem3c1qs} />
      <br /><br />
      <Slider imgs={sem3c1ans} />
      <br /><br />
      <div className="booklink">
        <a href={sem3c1link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
