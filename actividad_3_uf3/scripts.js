let retornar;
let prueba = [];
let p;
fetch("http://localhost/selects/getCat.php")
    .then((response) => response.json())
    .then((data) => {

        let keys = Object.keys(data);
        //retornar = data;


        for (let a = 0; a < data.length; a++) {
           let key = keys[a];
           let valor = data[key];
           console.log("Clave :" , key , ", Valor: " , valor);
        }


        /*
        console.log(prueba);
        console.log(data);
*/
    })
    .catch((error) => {
        console.error('Error', error)
    });


