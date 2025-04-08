// This is how we write functions in js:
function sum(){

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    const sum = Number(num1) + Number(num2);

    let text = document.getElementById('sum');
    text.innerText  =  sum;
}
