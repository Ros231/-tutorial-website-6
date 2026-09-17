// loop กับ array และ object
const array_data = [10,20,30,40,50]

for (let index = 0; index < array_data.length; index++) {
    const element = array_data[index];
    console.log(element);
}

console.log("------------------------------------------------")
// 2
array_data.forEach(element => {
    console.log(element);
});

console.log("------------------------------------------------")
// 3
array_data.map(element => {
    console.log(element);
});

console.log("------------------------------------------------")
// 4
for (const element of array_data) {
    console.log(element);
}

console.log("------------------------------------------------")
//5
for (const key in array_data) {
    console.log(array_data[key]);
}