//Se añaden los eventos para el dom


//document.getElementById('nombre').addEventListener('change',validacion);
document.getElementById('saludo').addEventListener('click',verificar);

/*function validacion(){
    //para crear variables let - var - const
    let nombre = document.getElementById('nombre').value;
    
}*/

function verificar(){
    let nombre = document.getElementById('nombre').value
    if(nombre=="")
    {
        alert("No hay nombre de alumno");
    }
    else{
        alert(nombre);
    }


}