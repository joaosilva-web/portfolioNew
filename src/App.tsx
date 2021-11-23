import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react"
import "./styles/theme"
import { myTheme } from './styles/theme'
import Portfolio from './components/Portfolio'
import Experiencias from './components/Experiencias'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider resetCSS theme={myTheme}> 
        <Home/>
        <Portfolio/>
        <Experiencias/>
        <Contact/>
    </ChakraProvider>
  )
}

export default App
