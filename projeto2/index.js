const pi = 3.14;
let r;
let circumference;

document.getElementById("submit").onclick = function(){
    r = document.getElementById("numero").value;
    r = Number(r);
    circumference = 2 * pi * r;
    document.getElementById("ah3").textContent = circumference;
}