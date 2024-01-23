let numbers = 10
//undefined
if (numbers > 0) { 
    console.log("숫자는 양수");
    } else if (number < 0){
    console.log("숫자는 음수");
    } else {
    console.log(" 0입니다.");
};
//VM347:2 숫자는 양수
//undefined
result = (numbers > 0) ? '양수!' : "음수!";

//'양수!'
console.log(`숫자는 ${result}`);
//VM528:1 숫자는 양수!
//undefined