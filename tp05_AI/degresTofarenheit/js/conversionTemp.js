function FtoC() {
    
    var operande2 = document.getElementById("op2").value;
    var res;

    res = ((5.0/9.0)*(operande2 - 32.0));
    document.getElementById("op1").value = res;

}

function CtoF() {
    var operande1 = document.getElementById("op1").value;
    var res;

    res = ((operande1 / (5.0/9.0))+ 32.0);
    document.getElementById("op2").value = res;
}
