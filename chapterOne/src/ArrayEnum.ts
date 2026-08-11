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


//----------------------------------------    Tuples    -----------------------------------------------------


let chaiTuples:[string,number,boolean?]

chaiTuples=["masala",20]  // order should be same, can use optional parameters like boolean in example

// readonly tuples 
let addTuple:readonly[number,number]

let teaTuples:[name:string,price:number]                     // named tuple taki pata chale ki konsi value likhni h
teaTuples=["adrak",20]

//Note:- tuples me .push kaam kar jata h(kyuki h toh woh array hi) or ye chiz koi error nhi deti toh debug karna hard h,avoid pushing


//----------------------------------------     Enums      -------------------------------------------------------

enum size{
    small,
    medium,  // anything custom smallcase or uppercase(preferred)
    LARGE
}
const cupSize=size.medium

//increment
enum status{
    PENDING=100,
    SENT,                // agar ek value de di toh aage ki value increment hoke =101 ho jaegi
    FAILURE              // =102
}
const curentStatuscode=status.FAILURE    //so basically now curentStatuscode=102

//Note:-> enum hum homogenous banate h , aisa nhi enum me id,name,items sab ho. ex:-status wala pura no. ka h aise