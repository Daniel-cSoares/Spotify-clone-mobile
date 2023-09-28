function play(){
    let btnPlay = document.getElementById("play")
    let atributo = btnPlay.getAttribute("name")

    if(atributo == "play-circle"){
        btnPlay.setAttribute("name", "pause-circle")
    }
    else{
        btnPlay.setAttribute("name", "play-circle")
    }
}
function active(id){
    console.log("estadoAtual");
    let icone = document.getElementById(id)
    let style = window.getComputedStyle(icone)
    let estadoAtual =  style.getPropertyValue("color")
    console.log(estadoAtual);
    if (estadoAtual == "rgb(255, 255, 255)"){
        icone.style.color = '#1DB954'
    }
    else{
        icone.style.color = 'rgb(255, 255, 255)'
    }
}
function trocarImg(){
    let cont = 0
    let jpeg = true
    let bg = document.getElementById("bg")
    let style = window.getComputedStyle(bg)
    let imgAtual = style.getPropertyValue("background-image")
    let indiceImg = imgAtual.indexOf(".jpeg")
    console.log(imgAtual);

    if (indiceImg == -1){
        indiceImg = imgAtual.indexOf(".jpg")
        jpeg = false
    }

    if (imgAtual[indiceImg-1] > 3){
        cont = 1
    }
    else if (imgAtual[indiceImg-1] < 1){
        cont = 3
    }
    else{
        cont += 1
    }

    if (jpeg == true){
        bg.style.backgroundImage = "url(./img/"+cont+".jpeg);"
        console.log("Mudado para: ", "url(./img/"+cont+".jpeg);");
    }
    else{
        bg.style.backgroundImage = "url(./img/"+cont+".jpg);"
        console.log("Mudado para: ", "url(./img/"+cont+".jpg);");
    }
    console.log("indexOF: ", indiceImg);
    console.log("Imagem", imgAtual[indiceImg-1]);
    
}