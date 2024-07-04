


function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function sumOfsquares(a,b){
    let square1=square(a);
    let square2=square(b);
    return square1+square2;
}
function sumOfcubes(a,b){
    let square1=cube(a);
    let square2=cube(b);
    return square1+square2;
}
function sumOfsomething(a,b,fn){
    let square1=fn(a);
    let square2=fn(b);
    return square1+square2;
}
let ans=sumOfsomething(5,2,square);
console.log(ans)
