import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3M2() {
  const { sem3m2qs, sem3m2link } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 M2" />
      <Slider imgs={sem3m2qs} />
      <br /><br />
      <div className="booklink">
        <a href={sem3m2link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
