
import React from 'react'

export default function Slider({imgs}) {
  return (
    <>
        <div className="slider">
            {
                imgs.map((img) => {
                    return(
                        <>
                            <img src={img} alt="" />
                        </>
                    )
                })
            }
        </div>
    </>
  )
}
