function cal(num1, to, num2){
    let result;
    if(to === "+"){
        result = num1 + num2;
    }else if(to === "-"){
        result = num1 - num2;
    }else if(to === "*"){
        result = num1 * num2;
    }else if(to === "/"){
        result = num1 / num2;
    }
    console.log(result);
    return result;
}

cal(3, "+", 6);
cal(11, "-", 6);
cal(6, "*", 3);
cal(15, "/", 3);