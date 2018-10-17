function getNewColor() {
    var symbols = "0123456ABCDEF";
    
    for(var i= 0; i<6; i++) {
        color = color + symbols[Math.floor(Math.random) * 16];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;

}
getNewColor();       

