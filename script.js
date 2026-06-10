function mostrarMensagem(){
    alert(
        "A sustentabilidade no campo garante produção eficiente e preservação dos recursos naturais."
    );
}

function verificarResposta(tipo){

    const resultado = document.getElementById("resultado");

    if(tipo === "certa"){
        resultado.innerHTML = "✅ Correto! O plantio direto ajuda a conservar o solo.";
        resultado.style.color = "green";
    }else{
        resultado.innerHTML = "❌ Incorreto. O desmatamento prejudica o meio ambiente.";
        resultado.style.color = "red";
    }
}

function animarContadores(){

    animar("solo", 70);
    animar("agua", 60);
    animar("carbono", 45);

}

function animar(id, valorFinal){

    let valor = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        valor++;

        elemento.textContent = valor;

        if(valor >= valorFinal){
            clearInterval(intervalo);
        }

    }, 30);
}
