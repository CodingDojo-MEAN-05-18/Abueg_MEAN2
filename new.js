var fast_mammal = 'Cheetah';
var slow_mammal = 'Sloth';
//**** withOUT DI
// class Car{
//     engine;
//     tires;
//     constructor(){
//         this.engine = new Engine();
//         this.tires = new Tires();
//     }
// }
//with DI ****
var Car = /** @class */ (function () {
    function Car(engine, tires) {
        this.engine = engine;
        this.tires = tires;
    }
    return Car;
}());
var myStr = 'this is a string';
var myNum = 7;
var myBool = true;
var arrOfNums;
var arrOfNums2;
var anything = 7;
function testing() {
    var x = 10;
    console.log(x);
}
// console.log(x)
if (true) {
    var x = 10;
    console.log(x);
}
// console.log(x)
var myobj = {
    a: 1, b: 2
};
myobj.a = 5;
function errorHandler(message) {
    throw new Error(message);
}
function printVal(val) {
    console.log(val);
    return;
}
var SLNode = /** @class */ (function () {
    function SLNode(valP) {
        this.val = valP;
    }
    SLNode.prototype.someFun = function () {
        console.log("fun");
    };
    return SLNode;
}());
var firstSLNode = new SLNode(1);
