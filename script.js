var sprite = {

    name:'',
    age:0,
    getAge : function () {
        return 'Возраст: ' + this.age;
    },
    init : function (setname,setage) {
        this.name=setname;
        this.age=setage;
    }
};

var a = [];

a.push(sprite);
a[0].init('asd',45);
a
