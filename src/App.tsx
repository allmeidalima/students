import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import StudentList from './pages/StudentList'
//import Layout from './pages/Layout'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<StudentList/>}>
          <Route index element={<Home/>}/>
          <Route path='/studentlist' element={<StudentList/>}/>
        </Route>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
