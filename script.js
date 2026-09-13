document.getElementById("addBtn").addEventListener("click",function(){

    let a=parseFloat(document.getElementById("numA").value);
    let b=parseFloat(document.getElementById("numB").value);

    if (isNaN(a) || isNaN(b)){
        document.getElementById("result").textContent="Please enter both numbers";
        return;
    }

    let sum= a+b;
    document.getElementById("result").textContent= a + "+" + b + "=" + sum;
}

);