let btnAdd = document.querySelector("#btn_add");
let msgError = document.querySelector(".msg_error");
let ul = document.querySelector(".elements_wraper ul");
let btnTrier = document.querySelector(".trier");


btnAdd.onclick = function (e) {

    let inputVal = document.querySelector("#text_val").value;

    e.preventDefault();

    if (inputVal === "") {

        msgError.innerHTML = " This is a danger alert—check it out!";
        msgError.style.display = "block";

        setTimeout(() => {
            msgError.style.display = "none";
        }, 1500);

    }

    else {

        let li = document.createElement("li");
        let liText = document.createTextNode(inputVal);

        li.appendChild(liText)

        ul.appendChild(li);

        checkIfMorThanTwo(ul)
    }

}


function checkIfMorThanTwo(ul) {

    if (ul.children.length > 1) {
        btnTrier.classList.remove("disabled")
    }
    else
        btnTrier.classList.add("disabled")

}

btnTrier.onclick = function (e) { 
    e.preventDefault();
 }