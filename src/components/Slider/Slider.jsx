
import React from 'react'
import './Slider.css'

export default function Slider({ imgs }) {
return (
    <>
        <div className="slider">
            {
                imgs.map((img) => {
                    return (
                        <img src={img} alt="" />
                    )
                })
            }
        </div>
    </>
)
}
