/* Validate that the user entered a positive amount */
function validateAmount(){
    var amount = document.getElementById("principal").value;
    if (amount <= 0){    
        alert("Please enter a positive number.")
    }
    document.getElementById("principal").focus();
}

/* Compute the interest given the amount, interest rate, and years (1 to 10) */
/* Display the input values and computed interest                            */
function compute(){
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = (p * y * r / 100).toFixed(2);
    var year = new Date().getFullYear()+ parseInt(y);
    document.getElementById("result").innerHTML = "\<br\>" 
    + "If you deposit " +  "\<mark\>" + "$" + p + "\</mark\>" + 
    "\<br\>" 
    + "at an interest rate of " + "\<mark\>" + r + "%" + "\</mark\>" +
    "\<br\>" 
    + "you will receive an amount of " +  "\<mark\>" + "$" + interest + "\</mark\>" +
    "\<br\>" 
    + "in the year " + "\<mark\>" + year + "\</mark\>" + ".";
}

/* Display the value on the range */
function showValue(newvalue) {
    document.getElementById("rate_val").innerHTML = newvalue;
}
