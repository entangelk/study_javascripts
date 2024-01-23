let name = 'yohan'
// undefined

// 프린트 하는법
console.log(name)
// VM220:1 yohan


let welcome = 'Hello world !'
// undefined


welcome
// 'Hello world !'


let numbers = 55
// undefined


numbers
// 55

//  let은 변수 선언할때 해야됨

let concat = 'String : ' +welcome + ', Number:' +numbers
// undefined

alert(concat)
// 브라우저에 concat내용으로 알럿창 호출


// 작은 따움표가 아니라 1 옆에 있는 ` (틸트)임
let concats_tilt = `String : ${welcome} , Number : ${numbers}`
// undefined

concats_tilt
// 'String : Hello world ! , Number : 55'

console.log(concats_tilt)
// VM1159:1 String : Hello world ! , Number : 55