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



// ye Error dega kyuki hume nhi pata ki error me .message exist karta h 

// try {
    
// } catch (error) {
//     console.log(error.message);   
    
// }

try {
    
} catch (error) {
    if(error instanceof Error){   // ab ye sahi h kyuki capital wala "Error" ek predefined object h jisme message hota hai 
        console.log(error.message);   
    }
    
}

// -------------------------------  Never -----------------------------------------------

type Role="user"|'admin'
function checkRole(role:Role):void{    // void jab func kuch return na kare
    if( role==="admin"){
        console.log(`admin works`);
        return;
    }
    else if(role==="user"){
        console.log(`user works`);
        return;
    }
    role   // jab role ke cases handle ho gaye(return ho gya un cases me)  tab yaha role ka type never ho jata h 
}

function neverReturn():never{   // function bhi never type ke hote h( infinitely running func ka)
    while(true){}
}
