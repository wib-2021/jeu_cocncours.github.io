let btnAdd = document.querySelector("#btn_add");
let msgError = document.querySelector(".msg_error");
let ul = document.querySelector(".elements_wraper ul");
let btnTrier = document.querySelector(".trier");
let showWinLayout = document.querySelector(".show_winner") 
let sortLayout = document.querySelector(".sort") 

let inputFile = document.querySelector("#inputFile");

inputFile.addEventListener('change', function () {

    const reader = new FileReader();

    reader.onload = function () {

        let list = reader.result.split(" ");


    }

    reader.readAsText(inputFile.files[0])

    if (inputFile.files.length > 0) {
        btnTrier.classList.remove("disabled")
    }

    else
        btnTrier.classList.add("disabled")

})

btnAdd.onclick = function (e) {

    e.preventDefault();

    let inputVal = document.querySelector("#text_val").value;

    if (inputVal === "") {

        showMessage("Merci de entrer les nom a trier ou bien ajouter une liste")

    }

    else {

        let li = document.createElement("li");
        let liText = document.createTextNode(inputVal);

        li.appendChild(liText)

        ul.appendChild(li);

        if (ul.children.length > 1) {
            btnTrier.classList.remove("disabled")
        }
        else
            btnTrier.classList.add("disabled")
    }

}


btnTrier.addEventListener("click", function (e) {

    e.preventDefault()


    let ulChildren = Array.from(ul.children);
    let winneIndex;

  


    sortLayout.style.display ="none";
    showWinLayout.style.display ="block";
    
    showWinLayout.querySelector(".elements_wraper").innerHTML ;


    ulChildren = ulChildren.map((ele) => {

        return ele.innerHTML
    })



    winneIndex = Math.floor(Math.random() * ulChildren.length);



})



function showMessage(str) {
    msgError.innerHTML = str;
    msgError.style.display = "block";

    setTimeout(() => {
        msgError.style.display = "none";
    }, 2000);
}





