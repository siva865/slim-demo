import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SlimNTrim from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlimNTrim />
  </StrictMode>,
)
