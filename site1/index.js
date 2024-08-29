console.log("hello");
console.log("im the print command")

//window.alert('ALERT');
//window.alert('THEY EAT ALL MY HOUSE');

let x;
x = 12;
let y = 2;
let b = x - 2;
console.log(b)

let age;
document.getElementById("submit").onclick = function(){
    age = document.getElementById("agebox").value;
    console.log(age)
    document.getElementById("agetext").textContent = `youre ${age} years old`
};

