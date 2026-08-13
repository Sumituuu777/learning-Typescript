// class Chai{
//     flavor:string
//     price:number

//     constructor(flavor:string,price:number){
//         this.flavor=flavor             // this in js/ts refers to the new object(in this case this is foe newChai)
//         this.price=price
//     }
// }
// const newChai=new Chai("ginger",20)
// newChai.flavor                             //fetch you suggestions


class Chai{

    public flavor:string="masala"

    private secretIng:string="adrak"                 //private ki jagah #secretIng:string="adrak"   aise bhi define kar sakte h 

    reveal(){
        return this.secretIng                     // fir yaha par this.#secretIng ho jaega
    }

    protected shopName:string="chai tapri"       // protected can be accessed within this class or classes that extends this class
}

class Shop extends Chai{
    getname(){
        return this.shopName                  // aise access karte h
    }
}
const c= new Chai()
c.reveal()  //aise function se access karna hoga private ko 

// readonly bhi use kar sakte ho yaha 
//-------------------------------------------------getter  setter(private prop ke liye)------------------------------------------- 
class Cup{
    private _capacity:number=200                         // generally hum private properties ka naam _ se shuru karte h

    get capacity(){
        return this._capacity
    }
    set capacity(value:number){
        if(value>300){
            throw new Error("TO Much")
        }
        this._capacity=value
    }
}

const cup=new Cup()
cup.capacity=150
//----------------------------------static values------------------------------------------
class EkChai{
    static shopName="chai caffe"

    constructor(){}
}
console.log(EkChai.shopName);  //static value aise direct . lagakr access ki jati h 

//-----------abstract classes wo classes h jinse aap koi object nhi banana chahte
abstract class Drink{
    abstract make():void
}
class Mychai extends Drink{
    //Non-abstract class 'Mychai' does not implement inherited abstract member make from class 'Drink'.
    // agar use karna h toh ek make method banana padega
    make(){

    }
}

//--------------------------------------------------------------------------------------------------------------
//class composition or inherit
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater:Heater){}            //private likne par hi aata h
    make(){
        this.heater.heat
    }
}
//You might think:

// "I need private so I can access this.heater."

// More accurately:

// You need heater to be declared as a class property. private is one way TypeScript lets you declare it directly in the constructor.

// you could also use public or use it like(what happens actually or our method is shorthand for)

// class ChaiMaker {
//     private heater: Heater;

//     constructor(heater: Heater) {
//         this.heater = heater;
//     }

//     make() {
//         this.heater.heat();
//     }
// }