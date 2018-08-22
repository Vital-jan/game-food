
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