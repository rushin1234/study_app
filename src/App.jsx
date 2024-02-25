
import Header from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'

import C1 from './pages/c1'
import C2 from './pages/c2';
import M1 from './pages/m1'
import M2 from './pages/m2';
import E1 from './pages/e1'
import E2 from './pages/e2';

import SEM3C1 from './pages/sem3c1'
import SEM3C2 from './pages/sem3c2'
import SEM3M1 from './pages/sem3m1'
import SEM3M2 from './pages/sem3m2'
import SEM3E1 from './pages/sem3e1'
import SEM3E2 from './pages/sem3e2'
import SEM3ENG from './pages/sem3eng'
import SEM3EVS from './pages/sem3evs';

function App() {
  return (
    <>
    <Header />
    <div className="container1">
    <Routes>
      <Route path='/c1' element={<C1 />} />
      <Route path='/c2' element={<C2 />} />
      <Route path='/e1' element={<E1 />} />
      <Route path='/e2' element={<E2 />} />
      <Route path='/m1' element={<M1 />} />
      <Route path='/m2' element={<M2 />} />

      <Route path='/sem3c1' element={<SEM3C1 />} />
      <Route path='/sem3c2' element={<SEM3C2 />} />
      <Route path='/sem3m1' element={<SEM3M1 />} />
      <Route path='/sem3m2' element={<SEM3M2 />} />
      <Route path='/sem3e1' element={<SEM3E1 />} />
      <Route path='/sem3e2' element={<SEM3E2 />} />
      <Route path='/sem3eng' element={<SEM3ENG />} />
      <Route path='/sem3evs' element={<SEM3EVS />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App
