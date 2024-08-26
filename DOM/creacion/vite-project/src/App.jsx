import { useState } from 'react'
import { Selects} from './components/Selects';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hola, Bienvenido </h1>
    <p>Registra la siguiente información</p>
    <hr />

    <Selects/>

    
    </>
  )
}

export default App
