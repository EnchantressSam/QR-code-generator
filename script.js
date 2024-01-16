let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let inputBox = document.getElementById("inputBox")

function qenerateQR(){
    if(inputBox.value.length > 0){
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBox.value;
    imgBox.classList.add("show-img")
}else{
    inputBox.classList.add("error")
    setTimeout(()=>{
        inputBox.classList.remove("error")   
    }, 1000)
}

}

