type chaiorder = {
    wateramount: number, // predefined type like number,string boolean etc
    milkamount: number
}
function serveChai(order: chaiorder) { // function based me humesha chalega
    order
}

class prepChai implements chaiorder{ // ye class based me tab chalega jab feils(milkamount,wateramount) ka data type predefined ho
    wateramount=100
    milkamount=50
}
// -------------------------- but ------------------------------------------------------------------

type orderDetails={
    water:"small"|"large"  // custom type use kiya phat gaya
    milk:number
}
// class makeChai implements chaiorder {
//     Class 'makeChai' incorrectly implements interface 'chaiorder'.
//     Type 'makeChai' is missing the following properties from type 'chaiorder': type, milkamount

// }

//------------------------so use interface--------------------------

interface orderDetails2{
    water:"small"|"large"   // yaad rhe sirf object hi chalega isme
    milk:number             // ( type size="small"|"large")aise 1 line wale me bhi ek feild ka object hi banana padega
}


class perpOrder implements orderDetails2{
    water: "small" | "large"='large'
    milk: number=40                    // dono feilds ko use karna hoga ek feild likhne par error deta h(ye toh har jagah ki baat h jab
                                        // jab object banana ho class se bhi toh usi class ka object banta hai)
                                        // .....................warna not required feilds use hota hai................
}

//-------------------------------union intersection-----------------------------

type size="small"|"large"  // isme | unioun hai 🟢(aise custom type ko literal types bola jata hai)

type chaiBase={teaLeaves:number}
type chaiWater={wamount:number}

type chaiFinal=chaiBase & chaiWater  // intersection

const cup:chaiFinal={
    teaLeaves:10,
    wamount:2
}

// ---------------------------------------not required feilds -------------------------------------------------------
type User={
    usename:string
    bio?:string                        //bio aai toh string hogi
}
const u1:User={
    usename:"sumit"                  // is object me ek feild h fir bhi error nhi deta hai perfect hai
}
const u2:User={
    usename:"sumit",
    bio:"bio"
}

// readonly use karne par object me baar baar us feild ko value assign nhi kar sakte
type UserData={
    version:number
    readonly appname:string
}
const v1:UserData={
    version:1.1,
    appname:"raven"             //ek baar assign kar sakte ho
}
//v1.appname=""      // error dega ki read only property hai