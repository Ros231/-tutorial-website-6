// function มี 4 ประเภท (จะไม่ทำงานหากไม่ call function)
// no parameter no return
function myFuncA( ){
    console.log('AAA')
    console.log('BBB')
}
 
// have parameters no return
function myFuncB(a, b ){   // parameter เป็นตัวแปรแบบ local
    console.log(a + b)
}
 
// no parameter has return
function myFuncC( ){
    console.log('Wow wow wow')
    return 'Hi....'
}
 
// have parameters has return
function myFuncD(fullname, age ){
    return `Hi...${fullname} is ${age} years old`
}
 
//-------------------------------
// call function แบบไม่มี return เรียกใช้ได้เลย
myFuncA()
myFuncB(10, 20) // ข้อมูลที่ส่งให้ parameter เรียก argument
 
// call function แบบมี return ควรเขียนโค้ดที่มีการเอาค่าที่ return ไปใช้งาน
console.log( myFuncC() )
 
let data = myFuncD('Somchai', 20)  // ข้อมูลที่ส่งให้ parameter เรียก argument
console.log(data)