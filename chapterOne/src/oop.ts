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