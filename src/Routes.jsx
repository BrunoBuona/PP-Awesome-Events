import {Routes as Rutas, Route as Ruta} from 'react-router-dom'

// Rutas
import Home from './pages/Home'
import Stats from './pages/Stats'
import Contact from './pages/Contact'
import Layout from './layout/Layout'


export default function Routes() {
  return (
    <>
      <Layout>
          <Rutas>
            <Ruta path='/' element={<Home/>}/>
          </Rutas>
      </Layout>
    </>
  )
}

