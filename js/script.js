const message = document.getElementById('message');
const number = document.getElementById('number');
const word = document.getElementById('word');
const keyNumber = document.getElementById('keyNumber');
const keyWord = document.getElementById('keyWord');
const encryption = document.getElementById('encryption');
const decryption = document.getElementById('decryption');
const output = document.getElementById('output');

startOfAlphabet = 65;
endOfAlphabet = 90;

function clicked() {
    let alphabets = [];
    

    if(number.checked)
    {
        keyNumberValue = parseInt(keyNumber.value);

        for (let i = 0; i < 26; i++)
        {
            currentLetter = i + startOfAlphabet + keyNumberValue;
            if(currentLetter > endOfAlphabet)
            {
                currentLetter -= 26;
            }
            alphabets[i] = String.fromCharCode(currentLetter);
        }
    }
    else
    {
        keyWordValueStart = keyWord.value
        keyWordValue = keyWordValueStart.toUpperCase();
        keyWordChars = keyWordValue.split('');

        let alreadyUsed = [];
        lastChar = 0;
        counter = 0;

        keyWordChars.forEach(char => {
            lastChar = char.charCodeAt(0);
            for (let i = 0; i < alreadyUsed.length; i++)
            {
                if(lastChar == alreadyUsed[i])
                {
                    return;
                }
            }
            alphabets[counter] = char;
            alreadyUsed.push(lastChar);
            counter++;

        });

        while (alreadyUsed.length < 26){
            used = false;

            if(lastChar > endOfAlphabet)
            {
                lastChar -= 26;
            }

            for (let j = 0; j < alreadyUsed.length; j++)
            {
                if(lastChar == alreadyUsed[j])
                {
                    used = true;
                }
            }

            if (!used)
            {
                alphabets[counter] = String.fromCharCode(lastChar);
                alreadyUsed.push(lastChar);
                counter++;
            }
            lastChar++;
        }
    } 
    
    inputValue = message.value;
    chars = inputValue.split('');
    counter = 0;

    if(encryption.checked)
    {
        chars.forEach(char => {
            letter = char.toUpperCase().charCodeAt(0);
            letter -= startOfAlphabet;

            chars[counter] = alphabets[letter];
            counter++;
        });
    }
    else
    {
        deCryLetter = 'a';
        chars.forEach(char => {
            letter = char.toUpperCase();
            counterAlpha = 0;
            alphabets.forEach(charAlpha => {
                if(charAlpha.charCodeAt(0) == letter.charCodeAt(0))
                {
                    deCryLetter = String.fromCharCode(counterAlpha + 65);
                }
                counterAlpha++;
            })
            chars[counter] = deCryLetter;
            counter++;
        });
    }

    output.readOnly = false;
    output.value = chars.join('');
    output.readOnly = true;
}

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
    }
    else {
        encryption.checked = false;
        decryption.checked = true;
    }
}

function copied() {
    navigator.clipboard.writeText(output.value);
    //alert("Copied " + output.value + " to clipboard");
}
