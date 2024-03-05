let formData = new FormData();
let options = {
    method: 'POST',
    body: formData
}


//Recordar que para que funcione es necesario cambiar la base de datos y crear un id_categoria que sea aparte
// de la id primary key para que se pueda repetir
//Fetch que recoge el arreglo de objectos que envia el archivo php
fetch("http://localhost/selects/getCat.php")
    .then((response) => response.json())
    .then((data) => {

        //variable que obtiene el select
        let contenido = document.getElementById("categoria");

        //pruebas
        // console.log(contenido);
        let opcion = '';
        //obtención de datos ejemplo
        for (let d = 0; d < data.length; d++) {
            console.log(` El id: ${data[d].id} y su nombre es: ${data[d].nom}`)
        }

        //Crear las opciones a insertar
        data.forEach((categoria) => {
            opcion += `<option value="${categoria.id}"> ${categoria.nom} </option> `;
        });

        //Insertar las opciones en el select
        contenido.innerHTML += opcion;
        //pruebas
        // console.log(contenido);


    })
    .catch((error) => {
        console.error('Error', error)
    });

document.getElementById('categoria').addEventListener('change', function () {
    console.log("Valor seleccionat:", this.value);

    formData.append("cat1", this.value);


    fetch("http://localhost/selects/getSubCat.php", options)
        .then((response) => response.json())
        .then((data) => {

            let contenido = document.getElementById("subcategoria");

            contenido.innerHTML = '';

            // console.log(contenido);
            let opcion = '';
            //obtención de datos ejemplo
            /*
            for (let d = 0; d < data.length; d++) {
                console.log(` El id: ${data[d].id} y su nombre es: ${data[d].nom}`)
            }
*/

            data.forEach((categoria) => {
                opcion += `<option value="${categoria.id}"> ${categoria.nom} </option> `;
            });


            contenido.innerHTML += opcion;

            //console.log(contenido);


        })
        .catch((error) => {
            console.error('Error', error)
        });


});

