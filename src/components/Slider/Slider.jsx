
import React from 'react'
import './Slider.css'

export default function Slider({ imgs }) {
    if(imgs == null) {
        return <></>
    }
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

        <div className="link">
        <a target='_blank' href="https://github.com/rushin1234/BcsSem4Practicals">SEM-4 Practicals</a>
        </div>
    </>
)
}
