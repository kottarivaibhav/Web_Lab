function showCapital() {
    var select = document.getElementById("country").value;
    var capitalSpan = document.getElementById("capital");
    

    switch (select) {
        case "India":
            capitalSpan.innerText = "Delhi";
            break;
        case "UAE":
            capitalSpan.innerText = "Abu Dhabi";
            break;
        case "New zealand":
            capitalSpan.innerText = "Wellington";
            break;
        case "Germany":
            capitalSpan.innerText = "Berlin";
            break;
        default:
            capitalSpan.innerText = "";
    }
}
