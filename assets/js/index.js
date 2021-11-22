let msgError = document.querySelector(".msg_error");
let btnTrier = document.querySelector(".trier");
let showWinLayout = document.querySelector(".lyWinner")
let sortLayout = document.querySelector(".ly_upload");
let container = document.querySelector(".container");
let number = Math.ceil(Math.random() * 1000);





let inputFile = document.querySelector("#inputFile");

inputFile.addEventListener('change', function () {

    const reader = new FileReader();

    reader.onload = function () {

        let arrData = reader.result.split(" ");

        console.log(arrData)

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



    container.style.transform = `rotate(${number}deg)`;

    number += Math.ceil(Math.random() * 1000)


    // showWinLayout.style.display = "block";
    // sortLayout.style.display = "none";

})






