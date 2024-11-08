// console.log("now we are learning conditional expression")
 let a = prompt("Can you tell me your age?")//prompt will store in string
 a = Number.parseInt(a) //converting the string to a number
 console.log(typeof a) //

 if ( a < 0 ){
    alert("invaild age");
 }
 else if ( a < 18 && a>=1){
   alert("you cannot drive")
 }
 else{
    alert("you are elligibel to drive");
 }


 //
 console.log("you can " , a<18? "not drive" : "drive")// ternory operator basically evaluates a condition and excude the code according to conditionn