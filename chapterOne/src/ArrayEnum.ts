// declarations
const chaiName:string[]=['masala',"ginger"]

const rating:Array<number>=[4.5, 3, 5]

type Chai={
    name:string
    price:number
 
}
const menu:Chai[]=[ {name:"masala",price:10}, {name:"adrak",price:5} ]

const cities:readonly string[]=["jaipur", "alwar"]
// cities.push("newcity")            ye na toh push method suggest karega na kaam karne dega

//---------------------------------------- Tuples -----------------------------------------------------
let chaiTuples:[string,number,boolean?]

chaiTuples=["masala",20]  // order should be same, can use optional parameters like boolean in example

// readonly tuples 
let addTuple:readonly[number,number]

let teaTuples:[name:string,price:number]                     // named tuple taki pata chale ki konsi value likhni h
teaTuples=["adrak",20]

//----------------------------------