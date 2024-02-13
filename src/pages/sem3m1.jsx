import React, { useContext } from 'react'
import Title from '../components/Title'
import Slider from '../components/Slider'
import { ImgsContext } from '../context/imgs'

export default function SEM3M1() {
  const { sem3m1qs, sem3m1link } = useContext(ImgsContext)
  return (
    <>
      <Title title="SEM3 M1" />
      <Slider imgs={sem3m1qs} />
      <br /><br />
      <div className="booklink">
        <a href={sem3m1link}>Read book here</a>
      </div>

      <br /><br />
    </>
  )
}
