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
function extensaoDetect(url){
    let jpeg = url.indexOf(".jpeg")
    let jpg = url.indexOf(".jpg")
    let png = url.indexOf(".png")
    if (jpeg != -1){
        return ".jpeg"
    }
    else if (jpg != -1){
        return ".jpg"
    }
    else if (png != -1){
        return ".png"
    }
    else{
        return "u"
    }
}
function nextImg(){
    let bg = document.getElementById("bg");
    let style = window.getComputedStyle(bg);
    let urlImgAtual = style.getPropertyValue("background-image");
    let indiceImg = urlImgAtual.indexOf(extensaoDetect(urlImgAtual));
    let imgAtual = urlImgAtual[indiceImg-1];
    let imgAtualInt = parseInt(imgAtual);
    console.log(urlImgAtual);
    if (imgAtualInt == 4){
        imgAtualInt = 1;
    }
    else{
        imgAtualInt++;
    }
    bg.setAttribute("class", "bg"+imgAtualInt.toString()+" "+"bg")
}
function backImg(){
    let bg = document.getElementById("bg");
    let style = window.getComputedStyle(bg);
    let urlImgAtual = style.getPropertyValue("background-image");
    let indiceImg = urlImgAtual.indexOf(extensaoDetect(urlImgAtual));
    let imgAtual = urlImgAtual[indiceImg-1];
    let imgAtualInt = parseInt(imgAtual);
    console.log(urlImgAtual);
    if (imgAtualInt == 1){
        imgAtualInt = 4;
    }
    else{
        imgAtualInt--;
    }
    bg.setAttribute("class", "bg"+imgAtualInt.toString()+" "+"bg")
}