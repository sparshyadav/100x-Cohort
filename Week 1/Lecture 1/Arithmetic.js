function arithmetic(num1, num2, type){
    if(type=="plus"){
        return num1+num2;
    }
    if(type=="minus"){
        return num1-num2;
    }
    else{
        return "Not a Valid Type  ";
    }
}

function display(sum, type){
    console.log("The result is:", sum(5, 3, type));
}

display()