import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'
import { Info } from '../pages/Info'
import { Preview } from '../components/Preview'
import { NotFound } from '../pages/NotFound'

export const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />}>
          <Route path=':id' element={<Preview />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/info/:id' element={<Info />} />
        <Route path='/' element={<Navigate to='/home' />}/>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
