let botao1 = document.querySelector("#start");
let botao2 = document.querySelector("#tent");
let caixaTexto = document.querySelector("input");
let ponto = document.querySelector("h2");
let imagem = document.querySelector("img");
let contar = 0;

pesquisarPersonagem = () =>{
    let contador = Math.ceil(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${contador}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        imagem.src = data.image;
        console.log(data.name);
        let nomeDoPersonagem = data.name.toUpperCase().toString();
        botao2.onclick = function(){
            let caixaTextoMaiusculo = caixaTexto.value.toUpperCase().toString();
            if(caixaTextoMaiusculo === nomeDoPersonagem){
                contar++;
                ponto.innerHTML = contar;
            }else{
                contar--;
                ponto.innerHTML = contar;
            }
            pesquisarPersonagem();
        }
    })
}

botao1.onclick = pesquisarPersonagem;