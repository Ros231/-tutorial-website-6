//variable ตัวแปร มี 3 วิธี var, let, const
 
var data1 = 10      //var เป็น Global    ค่าในตัวแปรในตัวแปรสามารถเปลี่ยนได้        // เลี่ยงได้เลี่ยง เป็นทางเลือกสุดท้ายที่จะใช้
let data2 = 20      //let เป็น Local     ค่าในตัวแปรในตัวแปรสามารถเปลี่ยนได้
const data3 = 30    //const เป็น Local     ค่าในตัวแปรในตัวแปรไม่สามารถเปลี่ยนได้
 
// data3 = 300 Error
 
{
    var info1 = 11
    let info2 = 22
    const info3 = 33
    data2 = 200
    {
        var value = 101
        let value2 = 102
        const value3 = 103
 
        value2 = 'Hello'
        // value3 = 123456789 Error
    }
    value2 = 8888
    value3 = 9999    
}