export function drawDiagram(canvas) {

const ctx = canvas.getContext('2d');
/*beginPath()
closePath()
stroke()
fill()*/

ctx.beginPath();//«начать» серию действий описывающих отрисовку фигуры
//moveTo(100,100) // перемещает "курсор" в позицию x, y и делает её текущей
ctx.arc(150, 150, 70, 1/4 * Math.PI, 0, 0) /

ctx.closePath();  //является не обязательным действием 
//пытается завершить рисование проведя линию от текущей позиции к позиции с которой начали рисовать

ctx.fillStyle = 'yellow'; 
ctx.fill();

radians = (Math.PI / 180) * degrees 

}
