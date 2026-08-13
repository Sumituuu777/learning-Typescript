function WrapInArray<T>(item:T):T[]{
    return [item]
}
WrapInArray("me")
WrapInArray({flavor:"adrak"})
WrapInArray(2)                    //ye generic use hi isliye kiya jata h taki aap sabhi datatypes se input le sako

function kuch<A,B>(a:A,b:B):[A,B]{  // ye function ek array return karega a b order me
    return [a,b]
}
kuch("masala",{flavor:"adrak"})
kuch("masala",2)

// generic interfaces can be defined ---------------------------
interface Box<T>{
    content:T
}
const box:Box<string>={content:"sumit"}
const boxy:Box<number>={content:6}
// :-> isme partial,pick omit, required , classes me sab jagah use hota h ,syntax wahi hota h <T> laga do. used in api response,forms

interface ApiPromise<T>{
    status:number,
    data:T
}
const res:ApiPromise<{output:string}>={
    status:200,
    data:{output:"done"}
}