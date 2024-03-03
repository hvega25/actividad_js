const nom = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contra = document.getElementById("contrasena");
const contra_confirma = document.getElementById("confirma_contrasena");
const post = document.getElementById("postal");
const form = document.querySelector("form");


nom.addEventListener("focusout", function () {

    if (nom.value === '') {
        nom.style.backgroundColor = "#FF0000";
        console.log("Funciona")
    }
})


correo.addEventListener("input", function () {

    if (validateEmail(correo.value) === false) {
        correo.style.backgroundColor = "#FF0000";
    } else {
        correo.style.backgroundColor = "#FFFFFF";
    }
});


contra.addEventListener("input", function () {
    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let numbers = /[0-9]/;
    let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let result = "";
    if (contra.value.length >= 8 && lowerCaseLetters.test(contra.value) === true
        && upperCaseLetters.test(contra.value) === true && numbers.test(contra.value) === true &&
        specialChars.test(contra.value) === true) {
        contra.style.backgroundColor = "#008f39";

    } else {
        contra.style.backgroundColor = "#FF0000";
    }
})


contra_confirma.addEventListener("input", function () {
    if (contra_confirma.value === contra.value) {
        contra_confirma.style.backgroundColor = "#008f39";
    } else {
        contra_confirma.style.backgroundColor = "#FF0000";
    }
})


post.addEventListener("input", function () {
    if (post.value.length > 0) {
        post.style.backgroundColor = "#008f39";
    } else {
        post.style.backgroundColor = "#FF0000";
    }
})

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}
