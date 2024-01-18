this is my place to learn js.
//word vs keyword
//word=mehak,hello,real(common words)
//keyword=var,let,for(important words in a language)

//var constant let
//variables and constant
//code mein koi bhi data store krne ke liye jo use hota hai usse khete hai variables(jiski value bdle)
//constant is also used to store data but it remains same but if we try to change it,it give error



//console.log('hello world');
let name = 'mehak';
console.log(name);
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number(eg.1name)
//are case sensitive
let firstname='mehak',lastname='singla';
//best way to do this
let firstnam='mehak';
let lastnam='singla';
//the value of variable can change but the value of constant cannot change
const interestrate=0.3;
//primitive/value types
let myname='mehak';//string literal
let age=30;//number literal
let isApproved=false;//boolean literal
let myFirstName=undefined;
let myLastName=null;
let selectedcolor='red';
//dynamic typing

//hosting and hoisting are differnt
//hoisting-variable and functions are hoisted which means there declaration is moved on the top of code
//variable ko hoist krne se phle bhi hm use kr skte hau
//console.log(a);
// var a=5 this breaks into two part var a and a=5

//undefined and not-defined
//undefined mtlb var hau pr value nhi pta
//not-defined mtlb existence hi nhi hai

//types in js 
//primitive and reference
//primitives
//reference={}[]()
//aisi koi bhi value jisko copy krne pr real copy nhi hota,blkii us main value ka reference pass hojata hai,use hm refernce value khte hai,aur jiska real copy hojaye wo value primitive type value hoti hai

//var a=12;
//var b=a;
//b=b+2;

//var m=[1,2,3,4];
//var n=m;
//n.pop();

//conditionals if else else-if

//if(10>12){}

//loops-for while
//for(start;end;change){}
//for(var i=0; i<11; i++){console.log(i);}

//functions are mainly for 3 works
//when you dont want to run your code just in the moment(abhi nhi chlna chahte)
//jab aapka code aap reuse krna chahte ho
//jabb aap code chlana chahte ho har baar wth differnet data
//function abcd(){ // functionstatement}
//arguments-real value jo hm dete hai function chlate vakt
//parameters-variable jinme value store hoti hai arguments vali

//arrays
//push pop shift unshift
//array ke shuru mein value add krne ke liye unshift
//array ke shuru se ek value delete krne ke liye shift
//splice array ke beech se value htane ke liye
//arr.splice(index,kitni values delet krni hai)


// the diff b/w var let const
//var old js mein tha
//var function scoped hota hai
// var apne parent function mein khi bhi use ho skta hai
     //function abcd(){
    //   for(var i=1;i<12;i++){console.log(i);}
    // console.log(i);}
//var adds itself to the window object    


//let const new js mein hai
//let braces scoped hota hai
//let doesn't adds itself to the window object


//js language mein kuchh cheeje nhi hai jo hum use kr skte hai aur vo cheeje hme js se nhi blki browser se milti hai ,aise sare featres jo js ka part 
//nhi hai but phir bhi use kr skte hai unhe hm doondh skte hai ek particular object mein jiska nam hai window


//browser context api-window,stack,heap memory
//stack
//heap memory -it is used to store the data and the memory that we make

//execution context mtlb jb bhi hm function chlayege fnc apna khudka ek imaginary container bna lega jisme uski teen cheeje hogi:variables,function 
//inside that parent func,lexical environment of that function
//ye jo container hai imaginary ise bhi hm executuion context khte hai
//lexical environment hota hai ek chart jisme ye likha hota hai ke aapka particular function kin cheejo ko access kr skta hai and kinko nhi ,mtlb ki it holds its scope and scope chain

//how to copy reference values with  the help of spread operator {var a=[1,2,3,4,5] var b=[...a]}

//conditionals-truthy and falsy 
//if(-1)
//js mein kuchh bhi likho tat belong mainly to two types truthy and falsy
//falsy values hai 0 false undefined null NaN documneyt.all
//truthy values jitni bhi values bch gyi
//

//foreach forin dowhile
//foreach loop sirf array pe chlta hai mtlb ki jb bhi tumhare pass ek array ho tab use mein kaun aata hai foreach loop


