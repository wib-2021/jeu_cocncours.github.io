let msgError = document.querySelector(".msg_error");
let btnTrier = document.querySelector(".trier");
let showWinLayout = document.querySelector(".show_winner")
let sortLayout = document.querySelector(".sort")
let ul = document.querySelector("#lst1 > ul");


let inputFile = document.querySelector("#inputFile");

inputFile.addEventListener('change', function () {

    const reader = new FileReader();

    reader.onload = function () {

        let arrData = reader.result.split(" ");

        for (let i = 0; i < arrData.length; i++) {
            const element = arrData[i];

            let li = document.createElement("li");
            let liTextNode = document.createTextNode(element);

            li.appendChild(liTextNode);

            ul.appendChild(li)

        }
    }

    reader.readAsText(inputFile.files[0]);

    if (inputFile.files.length > 0) {

        btnTrier.classList.remove("disabled")

    }

    else
        btnTrier.classList.add("disabled")

})


btnTrier.addEventListener("click", function (e) {

    e.preventDefault();

    let arrLi = Array.from(ul.children);

    let winId = Math.floor(Math.random() * arrLi.length);

    let lst2 = document.querySelector("#lst2")


    lst2.appendChild(ul);


    showWinLayout.style.display = "block";
    sortLayout.style.display = "none";

})






