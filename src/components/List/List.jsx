import React, { useState } from 'react'
import './List.css'

const List = (props) => {

    const [clicked, setClicked] = useState(false)
    const handle = () => {
        setClicked(!clicked)
        console.log(clicked)
    }

    return (
        <li><a className='title' href="#" onClick={handle}>{props.title }</a>
            <ul 
            className={clicked ?
                "activeul" : "dropdown"}>
                {
                    props.subul.map((item) => {
                        return (
                            <li><a className='items' href="#"
                                onClick={() => {
                                    props.setCurrent(item.path)
                                    props.handleClick()
                                    handle()
                                }
                                }
                            >{item.name}</a></li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

export default List