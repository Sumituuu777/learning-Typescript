const chai={
    name:'masala chai',
    price:20,
    isHot:true
}
// jab properties infer hoti h tab hum end me ; lagate hai jaise 
let tea:{
    name:string;
    price:number;
    isHot:boolean
}
tea={   // ab ye badiya hume suggestions deta h, agar koi feild bharna chhod diya toh error deta hai
    name:"ginger tea",
    price:25,
    isHot:true
}

type Tea={            // ye resuable hota h 
    name:string;
    price:number;
    ingridints:string[]  // array me string ke elements
}
const adrakChai:Tea={
    name:"adrak chai",
    price:35,
    ingridints:["water","milk"]
}
//---------------------------------------------------------------------------
// agar bsic properties match hoti h toh bade object ko bhi apne Cup datatype ke obj me assign kar sakte h 
type Cup={
    size:string
}
let smallCup:Cup={
    size:"200ml"
}
const BigCup={      // ye normal obj h 
    size:"500ml",
    material:"steel"
}
smallCup=BigCup  // ye assign ho jata h

//----------------------------------------------💫💫 Splitting type 💫💫-------------------------------------------------------
type item={
    name:string;
    quantity:number
}
type Address={
    city:string;
    pincode:number
}
type Order={
    id:string;
    items:item[]  // aise dusre types ko normal id:string ke sath bhi use kar sakte hai
    address:Address
}
//------------------------------------Partial makes all properties unmandatory --------------------------------------------------
type newteaType={
    name:string
    tealeaves:number
    isHot:boolean
}
function createChai(ing:Partial<newteaType>){
    console.log(`creating chai with,`,ing);  
}
createChai({name:"masala"})  // baki ke feilds na bhi do toh bhi kaam karta h
createChai({})  // 1 bhi feild na do tab bhi kaam karega(ye hi bekar baat h iski)

//-------------------------------Required make all properties mandatory even if they were optional---------------PICK------------------
type ordertea={
    name:string
    tealeaves:number
    isHot?:boolean                 //ye optional feild h type me toh par required likhne par ye bhi mandatory ho gye
}
function createtea(ing:Required<ordertea>){
    console.log(`creating chai with,`,ing);  
}
// createtea({name:"masala"})            ab ye nhi chalega
// createtea({})



type basicOrdertea=Pick<ordertea, "name"|"tealeaves">         // ab object me name or tea leaves bas hona hi chahiye
const orderup:basicOrdertea={
    name:"ginger",
    tealeaves:4
}

// NOTE:-> agar tealeaves optional feild hota ishot ki tarah toh pick me bhi as optional feild hi aata.

//---------------------Omit(removes the property you want from type object)----------------------
type publicChai=Omit<ordertea,"tealeaves">
const public1:publicChai={
    name:"public chai"
}