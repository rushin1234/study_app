import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3E1() {
  const { sem3e1qs, sem3e1link } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 E1" />
      <Slider imgs={sem3e1qs} />
      <br /><br />
      <div className="booklink">
        <a href={sem3e1link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
