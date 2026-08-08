// like data typesyou can define values for a variable 
let airlineSeat :'aisle'|'middle'|'window'='aisle'
// now only these three values can be assigned 


const orders=['28','42','34','33'];

// in this currentorder is "any" but it should be either string or undefined
// let currentorder -->any     so instead
let currentorder : string | undefined;

for(let order of orders){
    if(order==="42"){
        currentorder=order;
    }
}
console.log(currentorder)