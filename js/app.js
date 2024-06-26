/*let finalKatsayi=60;
let vize1
let vize2
let final*/

function myFunction(event){
    event.preventDefault();
    const vize1 = parseFloat(document.getElementById("vize1").value);
    const vize2 = parseFloat(document.getElementById("vize2").value);
    const final = parseFloat(document.getElementById("final").value);
    const finalKatsayi = parseFloat(document.getElementById("finalKatsayi").value);
    
    const finalNotu = final*finalKatsayi/100+(vize1+vize2)/2*(100-finalKatsayi)/100;
    
    document.getElementById("sonuc").innerHTML="Final notunuz "+finalNotu.toFixed(2);
}
