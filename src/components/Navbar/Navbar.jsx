import React, { Component, useContext, useState } from 'react'
import './Navbar.css'
import { ImgsContext } from '../../context/imgs'
import List from '../List/List'


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

  const sem1 = [
    { name: 'C1', path: sem1c1 },
    { name: 'C2', path: sem1c2 },
    { name: 'M1', path: sem1m1 },
    { name: 'M2', path: sem1m2 },
    { name: 'E1', path: sem1e1 },
    { name: 'E2', path: sem1e2 },
    { name: 'S1', path: sem1s1 },
    { name: 'S2', path: sem1s2 }
  ]
  const sem2 = [
    { name: 'C1', path: sem2c1 },
    { name: 'C2', path: sem2c2 },
    { name: 'M1', path: sem2m1 },
    { name: 'M2', path: sem2m2 },
    { name: 'E1', path: sem2e1 },
    { name: 'E2', path: sem2e2 },
    { name: 'S1', path: sem2s1 },
    { name: 'S2', path: sem2s2 }
  ]
  const sem3 = [
    { name: 'C1', path: sem3c1 },
    { name: 'C2', path: sem3c2 },
    { name: 'M1', path: sem3m1 },
    { name: 'M2', path: sem3m2 },
    { name: 'E1', path: sem3e1 },
    { name: 'E2', path: sem3e2 },
    { name: 'ENG', path: sem3eng },
    { name: 'EVS', path: sem3evs }
  ]
  const sem4 = [
    { name: 'C1', path: sem4c1 },
    { name: 'C2', path: sem4c2 },
    { name: 'M1', path: sem4m1 },
    { name: 'M2', path: sem4m2 },
    { name: 'E1', path: sem4e1 },
    { name: 'E2', path: sem4e2 },
    { name: 'ENG', path: sem4eng },
    { name: 'EVS', path: sem4evs },
    { name: 'C-Practical', path: null },
    { name: 'M-Practical', path: null }
  ]
  const sem5 = [
    { name: 'BlockChain', path: sem5bc },
    { name: 'Computer Networks-2', path: sem5cn2 },
    { name: 'Datascience', path: sem5ds },
    { name: 'JAVA-1', path: sem5java1 },
    { name: 'Operating System-1', path: sem5os1 },
    { name: 'Python', path: sem5ptn },
    { name: 'Therotical CS', path: sem5thecs },
    { name: 'Web Technologies-1', path: sem5wt1 }
  ]
  const sem6 = [
    { name: 'Compiler', path: sem6com },
    { name: 'Data Analytics', path: sem6danalytics },
    { name: 'JAVA-2', path: sem6java2 },
    { name: 'Operating System-2', path: sem6os2 },
    { name: 'Software Tesing', path: sem6softtest },
    { name: 'Software Tesing & Tools', path: sem6softtest_tools },
    { name: 'Web Technologies-2', path: sem6wt2 }
  ]

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

              <List title='SEM-1' subul={sem1} setCurrent={setCurrent} handleClick={handleClick}/>
              <List title='SEM-2' subul={sem2} setCurrent={setCurrent} handleClick={handleClick}/>
              <List title='SEM-3' subul={sem3} setCurrent={setCurrent} handleClick={handleClick}/>
              <List title='SEM-4' subul={sem4} setCurrent={setCurrent} handleClick={handleClick}/>
              <List title='SEM-5' subul={sem5} setCurrent={setCurrent} handleClick={handleClick}/>
              <List title='SEM-6' subul={sem6} setCurrent={setCurrent} handleClick={handleClick}/>

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