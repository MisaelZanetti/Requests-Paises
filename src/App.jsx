import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [pais, setPais] = useState('')

  return (
    <>
      <h1>Info Paises</h1>
      <section className='body'>
        <div className='appc'>
          <form id="country-form">
            <label>Nombre del país</label>
            <input type="text" id="country-input" name="country" placeholder="Ej. Argentina" required onChange={(e) => setPais(e.target.value)} />
            <Link to={`/paises/${pais}`} ><button type="submit" id="search-btn">Buscar</button></Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
