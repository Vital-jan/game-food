
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
