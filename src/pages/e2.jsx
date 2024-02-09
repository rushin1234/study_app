import React from 'react'

import qs from '../assets/e2qs.pdf'
import Title from '../components/Title'

export default function E2() {
  return (
    <>
    <Title title="E2" />
      <iframe src={qs} frameborder="0"></iframe>

      <br /><br />
      <a href="#">Read book here</a>
      <br /><br />
    </>
  )
}
