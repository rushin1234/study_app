import React from 'react'

export default function Title(props) {
    let myStyle = {
        fontWeight: "800",
        textAlign: "Center",
        marginTop: "20px",
        fontFamily: "'Roboto Slab', serif"
    }
  return (
    <>
        <h2 style={myStyle}>{props.title}</h2>
    </>
  )
}
