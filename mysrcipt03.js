// Operator ตัวดำเนินการ เครื่องหมาย
 
// Arithematic Operator คือ ตัวดำเนินการคณิตศาสตร์
// + - * ** / % ++ --
console.log(10 ** 2)
 
// Comparison Operator คือ ตัวดำเนินการเปรียบเทียบ
// == != === !== > < >= <=
console.log('111' == 111)  //true
console.log('111' === 111) //false
 
// Logical Operator คือ ตัวดำเนินการเชื่อมต่อ
// !  &&  ||
 
// Assignment Operator คือ ตัวดำเนินการกำหนดค่า
// =  +=  -=  *=  /=  %=
let x = 10
x = x +  5 * 9 - 2 //ย่อได้เป็น x += 5 * 9 - 2
 
// && ใช้ตรวจสอบค่า null, undefined, false, 0, NaN, ''
// && call "nullish coalescing operator"
let a = null
let b = 20
let c = ''
let d
 
console.log(a && 'Wow')
console.log(b && 'Hello')
console.log(c && 'SAU')
console.log(d && 123456)
console.log((50 * 'abcd') && 'IoT')
console.log((50 * 100) && 'IoT')
 
// Ternary operator  ____ ? ____ : ____
console.log(20 > 500 ? 'Hello' : 'Hey')