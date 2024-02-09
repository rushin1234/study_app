
import React from 'react'
import Title from '../components/Title'

import qs from '../assets/e1qs.pdf'

export default function E1() {
  return (
    <>
      <Title title="E1"/>
      <iframe src={qs} frameborder="0"></iframe>
      <br /><br />
      <a href="https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57569&parent_id=5950204">Read book here</a>
      <br /><br />
    </>
  )
}
