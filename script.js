let code = document.querySelector(".code");
let qrcode = document.querySelector(".qrcode");
let text = document.querySelector(".text");



function generate(){
    if(text.value.length > 0){
        qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;  
        qrcode.style.background = "rgb(82, 82, 228)";  
    }
    else{
        text.classList.add("error");
        let audio = new Audio("beep-02.mp3");
        audio.play();
        setTimeout(()=>{
            text.classList.remove("error");
        },5000);
        
    }
}