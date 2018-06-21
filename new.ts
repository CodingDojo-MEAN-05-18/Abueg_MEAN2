type Mammal = 'Cheetah' | 'Lion' | 'Person' | 'Sloth';

var fast_mammal: Mammal = 'Cheetah';
var slow_mammal: Mammal = 'Sloth';

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
class Car{
    engine;
    tires;
    constructor(engine, tires){
        this.engine = engine;
        this.tires = tires;
    }
}

let myStr: string = 'this is a string';

let myNum: number = 7;

let myBool: boolean = true;

let arrOfNums: number[];

let arrOfNums2: Array<number>

let anything: any = 7;

function testing(){
    var x = 10;
    console.log(x);
}
// console.log(x)

if (true){
    let x = 10;
    console.log(x);
}
// console.log(x)

const myobj = {
    a: 1, b:2
}
myobj.a = 5;

function errorHandler(message: string): never{
    throw new Error(message);
}

function printVal(val: string): void{
    console.log(val);
    return;
}

class SLNode {
    val: number;

    constructor(valP: number){
        this.val = valP;
    }
    someFun(){
        console.log("fun");
    }
}
let firstSLNode = new SLNode(1);