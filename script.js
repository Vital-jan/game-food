var fps=30; // частота обновление, кадров/сек
var interval; // таймер
var xMax=400, yMax=400;  // размеры игрового поля

var sprite = {
	x:0, y:0, // текущие координаты
	dx:0, dy:0, // смещение (px/sec)
	w:0, h:0, // ширина и высота элемента в пикселах
	id:'', // идентификатор html
	img:'', // путь к файлу изображения
	move: function () {
		ddx=this.dx/fps;
    	ddy=this.dy/fps;

		this.x+=ddx;
		this.y+=ddy;
    	document.getElementById(this.id).style.top = Math.round(this.y)+'px';
		document.getElementById(this.id).style.left = Math.round(this.x)+'px';
		if ( (this.x>=xMax-this.w)||(this.x<=0) ) this.dx=-this.dx;
		if ( (this.y>=yMax-this.h)||(this.y<=0) ) this.dy=-this.dy;
	},
	init: function (id,w,h,x,y,dx,dy) {
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.w=w;
		this.h=h;
		this.id=id;
	}
}

function rnd(x) { // возвращает случайное число от 1 до x
    return Math.floor(Math.random()*x)+1;
}

var line=[];
line.push(sprite);
console.log(line[0]);


line[0].init('a01',30,30,10,10,50,80);

sprite
 console.log(rnd());
