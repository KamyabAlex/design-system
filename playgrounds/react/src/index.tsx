import React from "react";
import ReactDOM from "react-dom/client";
import {Buttons} from '@ds/react'
const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
      <Buttons lable="submit" />
  </React.StrictMode>
)