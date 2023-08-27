import './style.css'
import { CircularChart } from './CircularChart.js';

document.querySelector('#app').innerHTML = `
<canvas id='diagram' width="400" height="400">
  <p>
    Ваш браузер не поддерживает canvas
  </p>
</canvas>
`
const circularChart = new CircularChart('#diagram');
