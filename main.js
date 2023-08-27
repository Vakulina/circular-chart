import './style.css'
import { renderCircularChart } from './renderCircularChart.js'
import { generateSectorValues } from './getSectorParameters'

document.querySelector('#app').innerHTML = `
<canvas id='diagram' width="400" height="400">
  <p>
    Ваш браузер не поддерживает canvas
  </p>
</canvas>
`
const sectors = generateSectorValues()
const canvasElement = document.querySelector('#diagram')
const maxRadius = 200;
const centerX = canvasElement.clientWidth / 2;
const centerY = canvasElement.clientHeight/ 2;

canvasElement.addEventListener('click', function(event) {
  const canvasRect = canvasElement.getBoundingClientRect();
  const mouseX = event.clientX - canvasRect.left;
  const mouseY = event.clientY - canvasRect.top;

  // Проверка, находится ли клик в пределах большого круга
  const distanceToCenter = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
  if (distanceToCenter <= maxRadius) {
    const newSectors = generateSectorValues()
    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);  ///метод добавить clearcanvas
    renderCircularChart(canvasElement, newSectors )
  }
});

renderCircularChart(canvasElement, sectors)
