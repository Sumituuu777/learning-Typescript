let response:any // example in notes


// forceful type assertion tab use karte h jab mujhe khud aache se uska type pata ho json parse toh normal object hi banaega na 



type Book={
    name:string
}

let BookString ="{'name':'who moved my cheese'}" // aise string me hi data aata h localstorage se

// let BookObject= JSON.parse(BookString)   // ye normal type ka object banaega

// console.log(` book named ${BookObject}`)  // yaha . lagane par .name ka suggestion nhi aaega 


let BookObject= JSON.parse(BookString) as Book  // ye Book type ka banega

console.log(` book named ${BookObject.name}`)   // ab suggestion aega