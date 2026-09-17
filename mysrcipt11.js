// callback fuiction

function myFuncA(a,b,c) {

    let data = a + b(20,30) //call back function
    console.log(data)
    c("Hello", "World")  
}


myFuncA(100, function(aa,bb){
    return aa * bb
},
    (info) => {
        console.log(`callback ${info}`)
    }
);