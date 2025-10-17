const opa = document.getElementById("teste")

function img1(){
    opa.src = "img1.jpg"
    setTimeout("img2()", 2000)
}

function img2(){
    opa.src = "img2.webp"
    setTimeout("img3()", 2000)
}

function img3(){
    opa.src = "img3.webp"
    setTimeout("img1()", 2000)
}

img1();

