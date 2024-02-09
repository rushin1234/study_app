import React from 'react'

import qs from '../assets/c2qs.pdf'
import ans from '../assets/c2ans.pdf'
import Title from '../components/Title'

export default function C2() {
  return (
    <>
      <Title title="C2"/>
      <iframe src={qs} frameborder="0"></iframe>
      <br /><br />
      <iframe src={ans} frameborder="0"></iframe>
      <br /><br />
      <a href="https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57566&parent_id=5950204">Read book here</a>
      <br /><br />
    </>
  )
}
