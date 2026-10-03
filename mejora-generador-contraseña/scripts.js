
let SeleccionCaracterEspecial = false;
let SeleccionCaracterMayuscula = false;
let SeleccionCaracterMinuscula = false;
let SeleccionCaracterNumero = false;


let checbokSeleccionCaracterEspecial = document.getElementById("caracterEspeciales");
let checbokSeleccionCaracterMayuscula = document.getElementById("caracteresMayusculas");
let checbokSeleccionCaracterMinuscula = document.getElementById("caracteresMinusculas");
let checbokSeleccionCaracterNumero = document.getElementById("numeros");



checbokSeleccionCaracterEspecial.addEventListener("change", () =>{
    SeleccionCaracterEspecial = checbokSeleccionCaracterEspecial.checked;
});

checbokSeleccionCaracterMayuscula.addEventListener("change", () =>{
    SeleccionCaracterMayuscula = checbokSeleccionCaracterMayuscula.checked;
});

checbokSeleccionCaracterMinuscula.addEventListener("change", () =>{
    SeleccionCaracterMinuscula = checbokSeleccionCaracterMinuscula.checked;
});

checbokSeleccionCaracterNumero.addEventListener("change", () =>{
    SeleccionCaracterNumero = checbokSeleccionCaracterNumero.checked;
});






// Seleccionar el número
const numerosPermitidos = [5,10,15,20,25,30];
const inputRango = document.getElementById("rangoCaracteres");
const spanValor = document.getElementById("numeroCaracteres");


inputRango.min = 0;
inputRango.max = numerosPermitidos.length - 1;
inputRango.step = 1;
let valorUsuarioSeleccionado = 0;

inputRango.addEventListener("input", () => {
    const indice = parseInt(inputRango.value);
    valorUsuarioSeleccionado  = numerosPermitidos[indice];
    spanValor.innerHTML = valorUsuarioSeleccionado;
})



const button = document.querySelector(".botton");
let contraseña = "";


button.addEventListener("click", () =>{
    let contadorBucle = 0;
    let guardarContraseña = "";
    let noPuedeSeleccionaUnRango = false;
    let noPuedesSeleccionaUnTipo = false;
    let paraBucle = true;
    
    while(paraBucle == true){
        let elementoEscogido = Math.trunc(Math.random() * 5);
        if(valorUsuarioSeleccionado == 0){
            noPuedeSeleccionaUnRango = true;
            paraBucle = false;
            break;
        }
        if(SeleccionCaracterNumero == false && checbokSeleccionCaracterMinuscula.checked == false && checbokSeleccionCaracterMayuscula.checked == false && checbokSeleccionCaracterEspecial.checked == false){
            paraBucle = false;
            noPuedesSeleccionaUnTipo = true;
            break;
        }
        
        if(SeleccionCaracterNumero == true && elementoEscogido == 3){
            let number = `${Math.trunc(Math.random() * 10)}`;
            contadorBucle = contadorBucle + 1;
            guardarContraseña = guardarContraseña + number;
        }
        
        if(checbokSeleccionCaracterMinuscula.checked == true && elementoEscogido == 0){
            const abecedarioMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let rangoMinuscula = Math.floor(Math.random() * abecedarioMinusculas.length);
            let minusculaEscogido = abecedarioMinusculas[rangoMinuscula];
            contadorBucle = contadorBucle + 1;
            guardarContraseña = guardarContraseña + minusculaEscogido;
        }

        if(checbokSeleccionCaracterMayuscula.checked == true && elementoEscogido == 2){
            const abecedarioMayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Y', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            let rangoMayuscula = Math.floor(Math.random() * abecedarioMayusculas.length);
            let mayusculaEscogidos = abecedarioMayusculas[rangoMayuscula];
            contadorBucle = contadorBucle + 1;
            guardarContraseña = guardarContraseña + mayusculaEscogidos;
        }   
        
        if(checbokSeleccionCaracterEspecial.checked == true && elementoEscogido == 1){
            const caracteresEspeciales = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'];
            let rangoEspecial = Math.floor(Math.random() * caracteresEspeciales.length);
            let especialEscogido = caracteresEspeciales[rangoEspecial];
            contadorBucle = contadorBucle + 1;
            guardarContraseña = guardarContraseña + especialEscogido;
        }

        if(contadorBucle == valorUsuarioSeleccionado){
            paraBucle = false;
            break;
        }

    }
    const contraseñaTexto = document.querySelector(".contraseña-texto");

    if(noPuedeSeleccionaUnRango == true){
        contraseñaTexto.innerHTML = `Debes de seleccionar un rango`;
    }else if(noPuedesSeleccionaUnTipo == true){
        contraseñaTexto.innerHTML = `Debes de seleccionar un tipo de caracter`;
    }else{
        contraseñaTexto.innerHTML = guardarContraseña;
    }

    

})


const textoACopiar = document.querySelector(".contraseña-texto");


textoACopiar.addEventListener("click", ()=>{
    const resultadoContraseña = textoACopiar.innerText;
    navigator.clipboard.writeText(resultadoContraseña);
    textoACopiar.innerHTML = `Texto copiado`;
    setTimeout((() =>{
        textoACopiar.innerHTML = resultadoContraseña;
    }),2000)
    
})






