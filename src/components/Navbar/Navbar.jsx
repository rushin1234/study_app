import React, { Component, useContext, useState } from 'react'
import './Navbar.css'
import { ImgsContext } from '../../context/imgs'


const Navbar = () => {

  const {
    sem1c1, sem1c2, sem1m1, sem1m2, sem1e1, sem1e2, sem1s1, sem1s2,
    sem2c1, sem2c2, sem2m1, sem2m2, sem2e1, sem2e2, sem2s1, sem2s2,

    sem3c1, sem3c2, sem3m1, sem3m2, sem3e1, sem3e2, sem3eng, sem3evs,
    sem4c1, sem4c2, sem4m1, sem4m2, sem4e1, sem4e2, sem4eng, sem4evs,

    sem5bc, sem5cn2, sem5ds, sem5java1, sem5os1, sem5ptn, sem5thecs, sem5wt1,
    sem6com, sem6danalytics, sem6java2, sem6os2, sem6softtest, sem6softtest_tools, sem6wt2,

    current, setCurrent
  } = useContext(ImgsContext)

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav>
        <a href="/">
          <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg>
        </a>

        <div>
          <ul id="navbar"
            className={clicked ?
              "#navbar active" : "#navbar"}>
            <li><a href="">SEM 1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1c1)}}>C1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1c2)}}>C2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1m1)}}>M1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1m2)}}>M2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1e1)}}>E1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1e2)}}>E2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1s1)}}>S1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem1s2)}}>S2</a></li>
            <li><a href=""></a></li>

            <li><a href="">SEM 2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2c1)}}>C1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2c2)}}>C2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2m1)}}>M1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2m2)}}>M2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2e1)}}>E1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2e2)}}>E2</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2s1)}}>S1</a></li>
            <li><a href="#" onClick={()=>{setCurrent(sem2s2)}}>S2</a></li>
            <li><a href=""></a></li>

            <li><a href="">SEM 3</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3c1)}}>C1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3c2)}}>C2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3m1)}}>M1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3m2)}}>M2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3e1)}}>E1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3e2)}}>E2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3eng)}}>ENG</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem3evs)}}>EVS</a></li>
            <li><a href="">M Practical</a></li>
            <li><a href="">C Practical</a></li>
            <li><a href="">E Practical</a></li>
            <li><a href=""></a></li>

            <li><a href="">SEM 4</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4c1)}}>C1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4c2)}}>C2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4m1)}}>M1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4m2)}}>M2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4e1)}}>E1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4e2)}}>E2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4eng)}}>ENG</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem4evs)}}>EVS</a></li>
            <li><a href="">M Practical</a></li>
            <li><a href="">C Practical</a></li>
            <li><a href="">E Practical</a></li>
            <li><a href=""></a></li>

            <li><a href="">SEM 5</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5os1)}}>OS-1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5cn2)}}>CN-2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5wt1)}}>WT-1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5ds)}}>Datascience</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5java1)}}>JAVA-1</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5thecs)}}>Therotical CS</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5ptn)}}>Python</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem5bc)}}>BlockChain</a></li>
            <li><a href=""></a></li>

            <li><a href="">SEM 6</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6os2)}}>OS-2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6softtest)}}>Software Testing</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6wt2)}}>WT-2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6danalytics)}}>Data Analytics</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6java2)}}>JAVA-2</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6com)}}>Compiler Construction</a></li>
            <li><a href="#"  onClick={()=>{setCurrent(sem6softtest_tools)}}>Software Testing & Tools</a></li>
            {/* <li><a href="#"  onClick={()=>{setCurrent(sem6bc)}}>BlockChain</a></li> */}
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>

          </ul>
        </div>

        <div id="mobile">
          <i
            id='bar'
            onClick={handleClick}
            className={clicked ?
              "fas fa-times" :
              "fas fa-bars"}
          >

          </i>
        </div>
      </nav>
    </>
  )
}


export default Navbar