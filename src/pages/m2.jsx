import React from 'react'
import Title from '../components/Title'

// import pdf from "../assets/BSC.pdf"
import qs from '../assets/m2qs.pdf'
import ans from '../assets/m2ans.pdf'

export default function M2() {
  return (
    <>
    <Title title="M2" />
      <iframe src={qs} frameborder="0"></iframe>
      <br /><br />
      <iframe src={ans} frameborder="0"></iframe>
      <br /><br />
      <a href="https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57568&parent_id=5950204">Read book here</a>
      <br /><br />
    </>
  )
}
