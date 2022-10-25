import './bootstrap';

import React from 'react'
import ReactDom from 'react-dom/client'

import App from './components/App'
import Foot from './components/Foot'

//importando BrowserRooter
import {BrowserRooter} from 'react-router-dom'

ReactDom.createRoot(document.getElementById('app')).render(
  
    <BrowserRooter>
          <App/>
    </BrowserRooter>
)

ReactDom.createRoot(document.getElementById('Foot')).render(
    <Foot/>
)


