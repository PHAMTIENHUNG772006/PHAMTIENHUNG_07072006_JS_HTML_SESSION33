let btnElement = document.querySelector("#btnElement");
let btnText = document.querySelector("#count");
let inputElement = document.querySelector("#inputText");
let check = "";

inputValue();
btnElement.addEventListener(("click"), function(){
    btnText.textContent = " Số kí tự là :" + check.length;
});

function inputValue(){
    inputElement.addEventListener(("input"), function(){
        check = inputElement.value;
    });
}







