// is function me ${kind .} par . lagakar dekhoge to uske datatype wale suggestion hi dega
function chai(kind : string|number){
    if(typeof kind ==="string"){
        return `chai ${kind} is here` // yaha string wale suggestion
    }
    return `chai order ${kind} is here` // yaha no wale
}

// can make custom types
type chaiOrder={
    type:string,
    sugar:number
}
//this function will return true is obj is of our req data type
function isChaiOrder(obj :any):obj is chaiOrder{
    return(
        typeof obj==="object" &&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )
}
//in actual function after getting true response we can use .type .sugar methods  not thinking whether they exist or not
function serveOrder(item:chaiOrder|string){
    if(isChaiOrder(item)){
        return `serving ${item.type} with sugar ${item.sugar}...`
    }
    // ye wala item string h
    return `serving custom chai ${item}`
}

// better way without functions 

type MasalaChai={type:"masala",spicelevel:number}
type gingerChai={type:"ginger",amount:number}
type elaichiChai={type:"elaichi",aroma:number}

type Chai=MasalaChai|gingerChai|elaichiChai

function makeChai(order:Chai){
    switch (order.type) {
        case "masala":// cases me teeno masla ginger ye hi suggest karega 
            return `Masala chai with spicelevel ${order.spicelevel}` // isme .spicelevel hi suggest karega
            break;
    
        case "elaichi":
            return `Masala chai with spicelevel ${order.aroma}`  // isme .aroma hi suggest karega
            break;
    
        case "ginger":
            return `Masala chai with spicelevel ${order.amount}`
            break;
    }
}

// unknown type is used inplace of any 

let value:any 
value="mejkb"
value=[1,34,3]
value=2.5
value.toUppercase()      // ye yaha koi error nhi de rha par 2.5 par touppercase laga rhe h toh code phat jaega

let NewValue:unknown
NewValue="mejkb"
NewValue=[1,34,3]
NewValue=2.5
// NewValue.toUppercase()   yaha error de dega newValue is of type unknown

if(typeof NewValue==="string"){  // aise use karo 
   NewValue.toUpperCase()
}