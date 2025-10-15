import { useState } from 'react'
import './App.css'

function App() {
  const [pais, setPais] = useState('Spain')
  const [infoPais, setInfoPais] = useState({
    flags: {
      png: 'https://cdn-icons-png.flaticon.com/512/5524/5524562.png'
    },
    coatOfArms: {
      png: "https://images.icon-icons.com/3251/PNG/512/shield_regular_icon_203284.png"
    },
    translations: {
      spa: {
        common: ""
      },
    },
    area: '',
    languages: {
      a: '',
      b: '',
    }
  })

  const nuevoPais = (e) => {
    e.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then(res => res.json())
      .then(data => setInfoPais(data[0]));
  }

  const abrirMaps = () => {
    window.open(infoPais.maps.googleMaps, "_blank")
  }

  return (
    <>
      <h1>Info Paises</h1>
      <section className='body'>
        <div className='appc'>
          <form id="country-form" onSubmit={nuevoPais}>
            <label>Nombre del país</label>
            <input type="text" id="country-input" name="country" placeholder="Ej. Argentina" required onChange={(e) => setPais(e.target.value)} />
            <button type="submit" id="search-btn">Buscar</button>
          </form>
        </div>

        <div className='app'>
          <section id="country-card">
            <h2 id="country-name">{infoPais.translations.spa.common}</h2>
            <ul id="country-info">
              <li><strong>Capital:</strong> <span id="country-capital">{infoPais.capital}</span></li>
              <li><strong>Continente:</strong> <span id="country-population">{infoPais.region}</span></li>
              <li><strong>Idiomas:</strong>
                <span id="country-languages">
                  {Object.values(infoPais.languages).map((idioma, i) => (
                    <li id={i}>{idioma}</li>
                  ))}
                </span>
              </li>
              <li><strong>Area:</strong> <span id="country-area">{`${infoPais.area} km²`}</span></li>
              <strong>Bandera y Escudo:</strong>
              <div id='imagenes'>
                <img id="country-flag" src={infoPais.flags.png} />
                <img id="country-logo" src={infoPais.coatOfArms.png} />
              </div>
            </ul>
          </section>

          <button id="maps-btn" onClick={abrirMaps}>Encontrar en Google Maps</button>
        </div>
      </section>
    </>
  )
}

export default App
