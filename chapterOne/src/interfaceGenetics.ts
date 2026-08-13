// TypeScript feature       	Generates JS?          	Main purpose
// type	                               ❌ No	               Define types
// interface	                       ❌ No	                Define object contracts/types
// class	                           ✅ Yes	         Create runtime objects/behavior
// function	                           ✅ Yes	           Create runtime behavior
// enum	                               ✅ Usually	     Create runtime values

interface DisCountClac{
    (price:number):number  //interface method banane ke kaam nhi aata par fir bhi karna h, aise kart sakte ho 
}
const apply50:DisCountClac= (p)=>p*0.5

interface TeaMachine{
    start():void,
    stop():void
}
const machine:TeaMachine={            //ab ye suggestion dega ki ye 2 method toh hone hi chahiye 
    start() {
        
    },
    stop() {
        
    }
}
//---------------------------------------- index signatures(usually avoided) ----------------------------------
interface ChaiRartings{
    [flavor:string]:number
}
const ratings:ChaiRartings={
    masala:3.7,
    adrak:3.7,
}
//------------------------ interface merge ho jate h------------------------------------
interface User{
    name:string
}
interface User{
    age:number
}
const u:User={
    name:"sumit",
    age:20
}
//aise bhi kar sakte h
interface A{
    name:string
}
interface B{
    age:number
}
interface C extends A,B{}