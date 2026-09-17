// Arrow function
 
 
let data1 = () => console.log("Wow...");
 
 
 
let data2 = (x, y) => console.log(x + y);
 
 
 
let data3 = () => 'Wow wow wow'
 
 
 
let data4 = (a, b, c) => a + b + c;
 
 
 
let data5 = x => console.log(`X is ${x}`)
 
//--------------------
data1()
data2(10, 20)
 
console.log( data3() )
console.log( data4(5, 10, 15 ))
data5(1000)