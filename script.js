function isSameType(value1, value2) {
  //your js code here
	
	if (Number.isNaN(Number(value1)) && Number.isNaN(Number(value2))) {
        return true;
    }

    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    return typeof value1 === typeof value2;

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

if (!isNaN(value1) && value1 !== "") {
    value1 = Number(value1);
}
if (!isNaN(value2) && value2 !== "") {
    value2 = Number(value2);
}
alert(isSameType(value1, value2));
