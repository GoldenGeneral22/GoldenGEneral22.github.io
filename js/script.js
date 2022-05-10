const message = document.getElementById('message');
const number = document.getElementById('number');
const word = document.getElementById('word');
const keyNumber = document.getElementById('keyNumber');
const keyWord = document.getElementById('keyWord');
const encryption = document.getElementById('encryption');
const decryption = document.getElementById('decryption');
const output = document.getElementById('output');
modeMultiplier = 1;

function keyCheck(cases) {
    if(cases == 0) {
        number.checked = true;
        word.checked = false;
    }
    else {
        number.checked = false;
        word.checked = true;
    }
}

function cryptionCheck(cases) {
    if(cases == 0) {
        encryption.checked = true;
        decryption.checked = false;
        modeMultiplier = 1;
    }
    else {
        encryption.checked = false;
        decryption.checked = true;
        modeMultiplier = -1;
    }
}

function copied() {
    navigator.clipboard.writeText(output.value);
    //alert("Copied " + output.value + " to clipboard");
}

function clicked() {
    inputValue = message.value;
    keyValue = parseInt(keyNumber.value);

    chars = inputValue.split('');

    i = 0;
    chars.forEach(char => {
        letter = char.toUpperCase(i).charCodeAt(0);
        letter += keyValue * modeMultiplier;
        if(letter > 90 || letter < 65)
        {
            letter -= 26 * modeMultiplier;
        }
        chars[i] = String.fromCharCode(letter);
        i++;
    })

    output.readOnly = false;
    output.value = chars.join('');
    output.readOnly = true;
}
