
document.addEventListener("DOMContentLoaded",(e)=>{

    let num1=0;
    let num2=0;
    let operacion="";

    /* Capturando id */
    const resultado=document.getElementById("resultado");
    const uno=document.getElementById("1");
    const dos=document.getElementById("2");
    const tres=document.getElementById("3");
    const cuatro=document.getElementById("4");
    const cinco=document.getElementById("5");
    const seis=document.getElementById("6");
    const siete=document.getElementById("7");
    const ocho=document.getElementById("8");
    const nueve=document.getElementById("9");
    const cero=document.getElementById("0");
    const sumar=document.getElementById("sumar");
    const restar=document.getElementById("restar");
    const multiplicar=document.getElementById("multiplicar");
    const dividir=document.getElementById("dividir");
    const borrar=document.getElementById("borrar");
    const igual=document.getElementById("igual");
    const borrarN=document.getElementById("borrarN");
    const signo=document.getElementById("signo");


    /* Aplicando funcion para obtener el valor de cada boton y agrgarlo a la pantalla */
    uno.addEventListener("click",function(e){agregarNum(e.target.value)});
    dos.addEventListener("click",function(e){agregarNum(e.target.value)});
    tres.addEventListener("click",function(e){agregarNum(e.target.value)});
    cuatro.addEventListener("click",function(e){agregarNum(e.target.value)});
    cinco.addEventListener("click",function(e){agregarNum(e.target.value)});
    seis.addEventListener("click",function(e){agregarNum(e.target.value)});
    siete.addEventListener("click",function(e){agregarNum(e.target.value)});
    ocho.addEventListener("click",function(e){agregarNum(e.target.value)});
    nueve.addEventListener("click",function(e){agregarNum(e.target.value)});
    cero.addEventListener("click",function(e){agregarNum(e.target.value)});

    /* funcion agrega a la pantalla */
    function agregarNum(num){
        resultado.innerHTML=resultado.innerHTML+num;
    }

    /* operaciones */

    sumar.addEventListener("click",function(e){capturar1(e.target.value)});
    restar.addEventListener("click",function(e){capturar1(e.target.value)});
    multiplicar.addEventListener("click",function(e){capturar1(e.target.value)});
    dividir.addEventListener("click",function(e){capturar1(e.target.value)});
    igual.addEventListener("click",function(){capturar2()});
    borrarN.addEventListener("click",function(){borrarNum()});
    signo.addEventListener("click",function(e){cambiarSigno(e.target.value)})

    borrar.addEventListener("click",()=>{
        num2="";
        num1="";
        operacion="";
        resultado.innerHTML="";
    })

    

    function capturar1(op){
        num1=resultado.innerHTML;
        operacion=op;
        console.log(num1);
        limpiar();
    }

    function capturar2(){
        num2=resultado.innerHTML;
        limpiar();
        resolver();
    }

    function resolver(){
        switch (operacion) {
            case "+":
                resultado.innerHTML=parseInt(num1)+parseInt(num2);
                break;
            case "-":
                resultado.innerHTML=parseInt(num1)-parseInt(num2)
                break;

            case "/":
                resultado.innerHTML=parseInt(num1)/parseInt(num2);
                break;

            case "*":
                resultado.innerHTML=parseInt(num1)*parseInt(num2);
                break;
        
            default:
                break;
        }
    }

    function borrarNum(){
        resultado.innerHTML=resultado.innerHTML.slice(0,-1);
    }

    function cambiarSigno(signo){
        if(signo==="-"){
            if(resultado.innerHTML.charAt(0)==="-"){
                resultado.innerHTML=resultado.innerHTML.charAt(1,resultado.innerHTML.length-1);
            }else{
                resultado.innerHTML="-"+resultado.innerHTML;
            }
        }
    }

    
    function limpiar(){
        resultado.innerHTML="";
    }
})


