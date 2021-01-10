var d = new Date();
var year = d.getFullYear();
d.setFullYear(year);

function calage(){

    var DOB = document.getElementById("date").value;
    var yearin = DOB.substr(DOB.length - 4);
    if (year-yearin<18){
        alert("Age restriction you have to be atleast 18");
        var sub = document.getElementsById("sub");
        sub.isEnabled(false);
    }else {
        alert("Acess Granted");
    }
    console.log(yearin);

}

function todo(){
    calage();
    validacion();
}
function validacion() {
    var vector = "TRWAGMYFPDXBNJZSQVHLCKE";
    var dnientero = document.getElementById("dni").value;
    var letra = dnientero.substr(dnientero.length - 1);
    var numero = dnientero.substr(0,8);
    var valor = numero%23;
    var counter = vector.substring(valor, valor + 1);
    letra = letra.toUpperCase();
    if(letra != counter){
        alert("Wrong ID");
    }else{
        alert("ID Confirmed");
    }

    console.log(letra);
    console.log(numero);
    console.log(valor);
    console.log(counter);
}

