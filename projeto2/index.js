const pi = 3.14;
let r;
let circumference;

document.getElementById("submit").onclick = function(){
    r = document.getElementById("numero").value;
    r = Number(r);
    circumference = 2 * pi * r;
    if (circumference < 100){
        circumference = circumference + " pequeno"
    }
    else{
        circumference = circumference + " grande"
    }
    document.getElementById("ah3").textContent = circumference;
}

document.getElementById("submit2").onclick = function(){
    txt = document.getElementById("texto2").value;
    txt = txt + " aoso";
    document.getElementById("meuh3").textContent = txt;
}