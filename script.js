const message = document.getElementById('message');
const number = document.getElementById('number');
const word = document.getElementById('word');
const key = document.getElementById('key');
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

function clicked() {
    inputValue = message.value;
    keyValue = parseInt(key.value);

    chars = inputValue.split('');

    i = 0;
    chars.forEach(char => {
        if(char.toUpperCase(i).charCodeAt(0) > 90 || char.toUpperCase(i).charCodeAt(0) < 65)
        {
            chars.splice(i, 1);
        }
        i++;
    })

    i = 0;
    chars.forEach(char => {
        letter = char.toUpperCase(i).charCodeAt(0);
        letter += keyValue * modeMultiplier;
        if(letter > 90)
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
