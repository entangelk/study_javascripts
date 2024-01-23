// function 기본 구문
function func_name(param){
    return 0;
};

// call function
func_name(5);

function calculateSum(param_first,param_second){
    result = param_first + param_second;
    return result;
};
//undefined
result = calculateSum(3,5);
//8

// arrow function 기본구조 (위에 펑션 선언보다 원래 권장사항)
let arrow_function = (params) => {
    return 0;
}

// arrow function 내부사용 기본구문 (마치 lambda와 비슷)
(params) => {
}