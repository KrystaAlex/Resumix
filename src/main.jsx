import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Resumix from './Resumix.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Resumix />
  </StrictMode>,
)
