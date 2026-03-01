

const result = document.getElementById("result");
const upperSel = document.getElementById("upper");
const lowerSel = document.getElementById("lower");
const symbolSel = document.getElementById("symbol");
const numberSel = document.getElementById("numbers");
const Submit = document.getElementById("submitBtn");

Submit.addEventListener("click", () => {
    let passwordLength = 12;
    
    let includeUpper = upperSel.checked;
    let includeLower = lowerSel.checked;
    let includeSymbols = symbolSel.checked;
    let includeNumbers = numberSel.checked;

    const password = generatePass(passwordLength, includeUpper, includeLower, includeSymbols, includeNumbers);
    result.textContent = password;
});

function generatePass(length,uppercase,lowercase,symbols,numbers){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    const symbolChars = "!@#$%^&*()_+-=~`/";
    const numberChars = "1234567890";

    let allowedChars = "";
    let password = '';

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += symbols ? symbolChars : "";
    allowedChars += numbers ? numberChars : "";

    if (length <= 0) return "Password too short!";
    if (allowedChars.length === 0) return "Select at least 1 option!";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
        
    }
    return password;
     
}