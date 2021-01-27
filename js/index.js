let date = document.getElementById("date");
let nasa = new Controller;
window.onload = nasa.busca(new Date());

document.getElementById("insertDay").addEventListener("click",function(){
   document.getElementById("inputDate").remove()
   let day = document.getElementById("date");//pega o paragrafo do meu dia atual
    day = day.textContent;
    document.getElementById("divContainer").remove();
    let data = nasa.verificaData(date,day,"");
    date.value = "";//limpa meu input data
    nasa.buscaImagem(data);//adiciona o dia especifico na tela
}) 