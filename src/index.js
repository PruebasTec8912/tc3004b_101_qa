function add(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let result;
    result = Number(num1) + Number(num2);

    document.getElementById("result").innerText= "Result: " + result;
}

function sub(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let result;
    result = Number(num1) - Number(num2);

    document.getElementById("result").innerText= "Result: " + result;
}



function reset(){

    document.getElementById("num1").value =" ";
    document.getElementById("num2").value = " ";
    document.getElementById("result").innerText="Result: "

}