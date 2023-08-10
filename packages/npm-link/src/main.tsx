import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {renderToString} from "react-dom/server";
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let appDOM = renderToString(<App/>)

console.log(appDOM)