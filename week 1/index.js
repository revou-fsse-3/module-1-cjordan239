function myFunction() {
    let person = prompt("Please enter your name");

    if (person != null) {
        document.getElementById("loginButt").innerHTML =
            "Hello " + person + "! How are you today?";
    }

}








