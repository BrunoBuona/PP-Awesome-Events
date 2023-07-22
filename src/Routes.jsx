import {Routes as Rutas, Route as Ruta} from 'react-router-dom'

// Rutas
import Home from './pages/Home'
import Events from './pages/Events'
import Layout from './layout/Layout'


export default function Routes() {
  return (
    <>
      <Layout>
          <Rutas>
          <Ruta path='/' element={<Home/>}/>
          <Ruta path='/events' element={<Events/>}/>
          </Rutas>
      </Layout>
    </>
  )
}

