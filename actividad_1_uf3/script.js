const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
const preview = document.getElementById("preview");


let arrayFiles = [];
let files;

['dragover', 'dragleave', 'drop'].forEach(evt => {
    dropArea.addEventListener(evt, preventDefault);
})

function preventDefault(e) {
    e.preventDefault();
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    input.click();
});


input.addEventListener("change", e => {
    files = input.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active")
});


dropArea.addEventListener("dragover", e => {
    dropArea.classList.add("active");
    dragText.textContent = "Drop to upload";
});
dropArea.addEventListener("dragleave", e => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop files";
});

dropArea.addEventListener("drop", e => {
    files = e.dataTransfer.files;

    dropArea.classList.remove("active");
    dragText.textContent = "Drop & Drop files";

    arrayFiles = arrayFiles.concat(Array.from(files));
    showFiles();
    console.table(arrayFiles);
});


function showFiles() {

    preview.innerHTML = "";

    if (arrayFiles.length > 0) {
        arrayFiles.forEach((file, index) => {
            processFile(file, index);
        })
    }
}

function processFile(file, index) {
    const docType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];


    if (validExtensions.includes(docType)) {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;
        fileReader.addEventListener('load', e => {
            const fileUrl = fileReader.result;
            const image = `<div id="${id}" class="file-container">
                <img src="${fileUrl}" alt="${file.name}" width="50">
                <div class="status">
                <span> ${file.name}</span>
                <span class="status-text"> Loading... </span> 
                <span onclick="removeBtn(${index})" class="material-symbols-outlined removeBtn"> x </span>
                </div> 
                </div> `;

            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        });


        fileReader.readAsDataURL(file);
        //uploadFile(file);
    } else {
        alert("No es archivo válido")
    }
};


async function uploadFile(file, id) {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http:///localhost:3000/upload", {
            method: "POST",
            body: formData
        });
        const responseTexto = await response.text();
        console.log(responseTexto);
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="sucess"> File upload sucessfull</span>`;
    } catch (error) {
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure"> File Error</span>`;
    }
};


function removeBtn(i) {
    arrayFiles.splice(i, 1);
    showFiles();
}