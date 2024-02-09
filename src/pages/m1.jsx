import React from 'react'

import qs from '../assets/m1qs.pdf'
import Title from '../components/Title'

export default function M1() {
  return (
    <>
    <Title title="M1" />
      <iframe src={qs} frameborder="0"></iframe>
      <br /><br />
      <a className='booklink' href="https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57567&parent_id=5950204">Read book here</a>
      <br /><br />
    </>
  )
}
