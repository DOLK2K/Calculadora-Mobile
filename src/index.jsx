import './index.scss'
import apagar from '../src/assets/images/Vector.png'
import barra from '../src/assets/images/barra.png'
import { useState } from 'react';
function App() {

    const [numero, setNumero] = useState(0)
    const [antigo, setAntigo] = useState(0)
    const [operador, setOperador] = useState()

    function value (e) {
      let x = e.target.value

      if (numero === 0) {
        setNumero( x)
      } else {
        setNumero(numero + x)
      }
      
    }

    function ApagarTudo () {
      setNumero(0)
    }

    function apagarporUm (e) {
      let um = [...numero]
      um.splice(e,   1)
      setNumero(um)
    }

      function operacoes (e) {
        let chamada = e.target.value
        setOperador(chamada)
        setAntigo(numero)
        setNumero(0)
      }

      function calcular () {
        if(operador === '/') {
          setNumero(antigo / numero)
        }

        else if (operador === 'X') {
          setNumero(numero * antigo)

        }

        else if (operador === '+') {
          setNumero( Number( antigo) + Number( numero) ) 
        }

        else if (operador === '-')
        setNumero(antigo - numero)
      }

  return (
    <div className="App">
      <div className='cabecalho'>
        <h1>Portfólio.me</h1>
        <p>DOLK2K/Vinícius Brito Gonçalves</p>
      </div>

      <div className='elemento1'>


        <div className='resultado'> {numero} </div>


        <div className='container'>
          <div className='elemento2'>
            <button onClick={ApagarTudo} id='AC'>AC</button>
            <div className='eba'>
              <button onClick={value} value={7} >7</button>
              <button onClick={value}  value={4}>4</button>
              <button onClick={value} value={1} >1</button>
            </div>
          </div>

          <div className='elemento3'>
            <button onClick={apagarporUm} id='apagar'> <img src={apagar} /></button>
            <div className='ebaa'>
              <button onClick={value} value={8}  >8</button>
              <button onClick={value} value={5} >5</button>
              <button onClick={value} value={2} >2</button>
            </div>
          </div>

          <div className='elemento4'>
            <button className='barra' style={{fontSize:"20px", color:"#005DB2"}} onClick={operacoes} value={'/'}  >   /  </button>
            <div className='ebaaa'>
              <button onClick={value} value={9}  className='numeros'>9</button>
              <button onClick={value} value={6}  className='numeros'>6</button>
              <button onClick={value} value={3} className='numeros'>3</button>
            </div>
          </div>

          <div className='elemento5'>
            <div className='operador'>
              <button onClick={operacoes}  value={'X'} >X</button>
              <button onClick={operacoes} value={'-'} >-</button>
              <button onClick={operacoes} value={'+'} >+</button>
              <button onClick={calcular}  value={'='}>=</button>
            </div>
          </div>
        </div>

        <div className='elemento6'>
          <button onClick={value} value={0}  className='zerow'>0</button>
          <button value={'.'}  className='ponto'> .</button>
          <button  className='ponto' style={{ visibility: "hidden" }}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
