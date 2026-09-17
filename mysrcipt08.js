// Expression function คือ การเขียนฟังก์ชันในรูปแบบของนิพจน์
 
// Anonymus function
let data1 = function () {
    console.log('Wow...')
}
 
let data2 = function (x, y) {
    console.log(x + y)
}
 
let data3 = function () {
    return 'Wow wow wow'
}
 
let data4 = function (a, b, c){
    return a * b * c
}
 
let data5 = data1
 
//-----------------
data1()
data2(10, 20)
 
console.log( data3() )
console.log( data4(5, 10, 15 ))
data5()