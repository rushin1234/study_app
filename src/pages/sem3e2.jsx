import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3E2() {
  const { sem3e2qs, sem3e2link } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 E2" />
      <Slider imgs={sem3e2qs} />
      <br /><br />
      <div className="booklink">
        <a href={sem3e2link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
