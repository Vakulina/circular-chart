export class CircularChart {
   
  constructor(canvasSelector) {
      this.canvasElement = document.querySelector(canvasSelector);
      this.ctx = this.canvasElement.getContext('2d');
      this.center = {
        x: this.canvasElement.clientWidth / 2,
        y: this.canvasElement.clientHeight / 2,
      };
      this.maxRadius = 200;
      this.minRadius = 35;
      this.centerRadius = 33;
      this.colorArray = [
        '--red',
        '--orange',
        '--green-3',
        '--purple-1',
        '--blue-1',
        '--blue-3',
        '--green-1',
        '--yellow',
      ];
  
      this.init();
    }
  
    init() {
      this.canvasElement.addEventListener('click', (event) => {
        // Обработка клика в пределах круга
        const canvasRect = this.canvasElement.getBoundingClientRect();
        const mouseX = event.clientX - canvasRect.left;
        const mouseY = event.clientY - canvasRect.top;
  
        const distanceToCenter = Math.sqrt(
          Math.pow(mouseX - this.center.x, 2) + Math.pow(mouseY - this.center.y, 2)
        );
  
        if (distanceToCenter <= this.maxRadius) {
          this.render();
        }
      });
  
      this.render();
    }
  
    calculateSectors() {
      const minSectors = 1;
      const maxSectors = 8;
      return Math.floor(Math.random() * (maxSectors - minSectors + 1)) + minSectors; //случайное количество секторов
    }
  
    generateSectorValues() {
      const sectorsCount = this.calculateSectors();
      const sectorValues = [];
      let remainingFraction = 1;
  
      for (let i = 0; i < sectorsCount - 1; i++) {
        const maxFraction = Math.random() * remainingFraction;
        const fraction = Math.random() * maxFraction;
        sectorValues.push({
          fraction,
          radius: Math.floor(Math.random() * (this.maxRadius - this.minRadius + 1)) + this.minRadius,
          color: getComputedStyle(document.documentElement).getPropertyValue(this.colorArray[i]),
        });
        remainingFraction = remainingFraction - fraction;
      }
  
      sectorValues.push({
        fraction: remainingFraction,
        radius: Math.floor(Math.random() * (this.maxRadius - this.minRadius + 1)) + this.minRadius,
        color: getComputedStyle(document.documentElement).getPropertyValue(
          this.colorArray[sectorsCount - 1]
        ),
      });
  
      return sectorValues;
    }
  
    render() {
      this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  
      const sectors = this.generateSectorValues();
      let radianOffset = 0;
  
      sectors.forEach((sector) => {
        const { fraction, radius, color } = sector;
        const radianAngle = radianOffset + 2 * Math.PI * fraction;
        this.ctx.beginPath();
        this.ctx.arc(this.center.x, this.center.y, radius, radianOffset, radianAngle);
        this.ctx.lineTo(this.center.x, this.center.y);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();
        radianOffset = radianAngle;
      });
  
      //отрисуем центральный черный круг
      this.ctx.beginPath();
      this.ctx.arc(this.center.x, this.center.y, this.centerRadius, 0, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--black');
      this.ctx.fill();
    }
  }
