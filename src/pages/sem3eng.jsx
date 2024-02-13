import React, { useContext } from 'react'

import Title from '../components/Title'
import Slider from '../components/Slider'

import { ImgsContext } from '../context/imgs'

export default function SEM3ENG() {
  const { sem3en } = useContext(ImgsContext)
  return (
    <>
      <Title title="ENG" />
      <Slider imgs={sem3en} />
      <br /><br />
      <div className="booklink">
        <a href=''>Read book here</a>
      </div>
      <br /><br />
    </>
  )
}
