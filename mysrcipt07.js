// function -> default parameter
function sumNumber(a, b, c = 10, d = 50){
    console.log(a + b + c + d)
}
 
sumNumber(10, 20, 30, 40)
 
sumNumber(11, 22, 33)
 
sumNumber(555, 999)