
var a =  [];

var obj = {
    name:'123',
    number:0,
    init: function(name,number){
        this.name=name;
        this.number=number;
        this.move = function() {
            this.number+=50;;
        }
    }
}

for (var n=0; n<3; n++) {
    a.push(new obj.init(n,n));
}

a[2].name='qqqqqqqqqqqqqqqqq';
a

a[2].move();
a


function rnd(min, max) { // возвращает случайное целое число от min до max
    return Math.round(Math.random()*(max-min))+min;
}
for (t=0; t<100; t++) {
    console.log(rnd(-10,10));
}
var spriteImg = ['scissors.png','morkva.png','cherry.png','ambrelle.png','banan.png','candy.png','cucumber.png','pencil.png','morkva2.png','ice.png','ice2.png','boot.png','phone.png','egg.png','book.png','kavun1.png','kavun2.png','strawberry.png','sosage.png','car.png','ball2.png','ball3.png','apple.png','apple2.png','clock.png','ball.png'];
var e = [];
m=spriteImg.length;


for (n=0; n<m; n++) {
    e[25-n]=spriteImg[n];
}
console.log(e);

