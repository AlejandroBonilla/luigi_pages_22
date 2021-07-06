$(function () {

    // $("#boton1").click(mensaje);
    $("#boton1").click(function(){
        $("h1").css({
            color:"orange",
            fontSize:"50px",
        })
    });

    $("#boton2").click(function(event){
        console.log(event);
        $("h1").css({
            color: "black",
            fontSize: "32px",
        })
    });

    $("#formulario1").submit(function(event){
        event.preventDefault();
        console.log(event);
        // llamar a funcion para validar
        console.log("form valido");

        this.submit();
        // alert("en formulario");
    })


});

function mensaje(){
    alert("hola en mensaje")    
}

function suma(num1,num2){
    var resultado = parseInt(num1)+parseInt(num2);
    return resultado;
}

var resultadoSuma = suma("2","2");

console.log(resultadoSuma);






