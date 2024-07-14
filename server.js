let pin = ""; // Variable to store PIN

function validatePIN() {
    pin = document.getElementById("pin").value;
    if (pin.length === 4 && !isNaN(pin)) {
        document.getElementById("pinForm").reset();
        document.getElementById("display").innerHTML = "<p>PIN accepted. Select an option:</p>";
        document.getElementById("options").classList.remove("hidden");
    } else {
        alert("Invalid PIN. Please enter a 4-digit numeric PIN.");
    }
}

function checkBalance() {
    document.getElementById("display").innerHTML = "<p>Your balance is $1000.</p>";
}

function withdraw() {
    document.getElementById("display").innerHTML = "<p>Withdrawal function is under maintenance.</p>";
}

function deposit() {
    document.getElementById("display").innerHTML = "<p>Deposit function is under maintenance.</p>";
}

function logout() {
    pin = "";
    document.getElementById("display").innerHTML = "<p>You have been logged out.</p>";
    document.getElementById("options").classList.add("hidden");
}
