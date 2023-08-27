import './style.css'
import { drawDiagram } from './diagram.js'

document.querySelector('#app').innerHTML = `
<canvas id='diagram' width="378" height="378">
  <p>
    Ваш браузер не поддерживает canvas
  </p>
</canvas>
`

drawDiagram(document.querySelector('#diagram'))
