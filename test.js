
function rnd(min, max) { // возвращает случайное целое число от min до max
    return Math.round(Math.random()*(max-min))+min;
}

var spriteCount=5;
var spriteView = 3;

var sprite={
    exist:false,
    init:function() {
        this.exist = false;
    }
};
var sprites = [];
for (n=0; n<spriteCount; n++) {
    sprites.push(new (sprite.init));
}
for (var n = 1; n <= spriteView; n++) {
    var j = rnd(0,spriteCount-1);
    j

          while (sprites[j].exist) {
            j++;
            if (j == spriteCount) j = 0;
         }

          sprites[j].exist = true;

        }
 console.log(sprites);

