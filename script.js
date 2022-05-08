const message = document.getElementById('message');
const key = document.getElementById('key');
const output = document.getElementById('output');
const encryption = document.getElementById('encryption');
const decryption = document.getElementById('decryption');

function encryptionCheck() {
    if(decryption.checked) {
        decryption.checked = false;
    }
    else {
        encryption.checked = true;
    }
}

function decryptionCheck() {
    if(encryption.checked) {
        encryption.checked = false;
    }
    else {
        decryption.checked = true;
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
    if(encryption.checked) {
        chars.forEach(char => {
        letter = char.toUpperCase(i).charCodeAt(0);
        letter += keyValue;
        if(letter > 90)
        {
            letter -= 26;
        }
        chars[i] = String.fromCharCode(letter);
        i++;
        })
    }
    else
    {
        chars.forEach(char => {
            letter = char.toUpperCase(i).charCodeAt(0);
            letter -= keyValue;
            if(letter < 65)
            {
                letter += 26;
            }
            chars[i] = String.fromCharCode(letter);
            i++;
        });
    }

    output.readOnly = false;
    output.value = chars.join('');
    output.readOnly = true;
}

function intToChar(int){
    const code = 'A'.charCodeAt(0);
    console.log(code);
    return String.fromCharCode(code + int);
}
