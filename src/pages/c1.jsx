import React from 'react'

import qs from '../assets/c1qs.pdf'
import Title from '../components/Title'

export default function C1() {
  
  return (
    <>
      <Title title="C1"/>
      <iframe src={qs} frameborder="0"></iframe>
      {/* <embed src={qs} type="application/pdf" /> */}
      {/* <object data={qs} type=""></object> */}
      <br /><br />
      <a href="https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57565&parent_id=5950204">Read book here</a>
      <br /><br />
    </>
  )
}
