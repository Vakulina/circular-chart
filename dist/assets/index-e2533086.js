(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class a{constructor(s){this.canvasElement=document.querySelector(s),this.ctx=this.canvasElement.getContext("2d"),this.center={x:this.canvasElement.clientWidth/2,y:this.canvasElement.clientHeight/2},this.maxRadius=200,this.minRadius=35,this.centerRadius=33,this.colorArray=["--red","--orange","--green-3","--purple-1","--blue-1","--blue-3","--green-1","--yellow"],this.init()}init(){this.canvasElement.addEventListener("click",s=>{const r=this.canvasElement.getBoundingClientRect(),i=s.clientX-r.left,t=s.clientY-r.top;Math.sqrt(Math.pow(i-this.center.x,2)+Math.pow(t-this.center.y,2))<=this.maxRadius&&this.render()}),this.render()}calculateSectors(){return Math.floor(Math.random()*(8-1+1))+1}generateSectorValues(){const s=this.calculateSectors(),r=[];let i=1;for(let t=0;t<s-1;t++){const e=Math.random()*i,n=Math.random()*e;r.push({fraction:n,radius:Math.floor(Math.random()*(this.maxRadius-this.minRadius+1))+this.minRadius,color:getComputedStyle(document.documentElement).getPropertyValue(this.colorArray[t])}),i=i-n}return r.push({fraction:i,radius:Math.floor(Math.random()*(this.maxRadius-this.minRadius+1))+this.minRadius,color:getComputedStyle(document.documentElement).getPropertyValue(this.colorArray[s-1])}),r}render(){this.ctx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height);const s=this.generateSectorValues();let r=0;s.forEach(i=>{const{fraction:t,radius:e,color:n}=i,c=r+2*Math.PI*t;this.ctx.beginPath(),this.ctx.arc(this.center.x,this.center.y,e,r,c),this.ctx.lineTo(this.center.x,this.center.y),this.ctx.closePath(),this.ctx.fillStyle=n,this.ctx.fill(),r=c}),this.ctx.beginPath(),this.ctx.arc(this.center.x,this.center.y,this.centerRadius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue("--black"),this.ctx.fill()}}document.querySelector("#app").innerHTML=`
<canvas id='diagram' width="400" height="400">
  <p>
    Ваш браузер не поддерживает canvas
  </p>
</canvas>
`;new a("#diagram");
