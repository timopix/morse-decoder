const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

class MorseDecoder {
    static decode(expr) {
        let arr = [];
        let phrase = [];

        for (let i = 0; i < expr.length; i += 10) {
            let letter = '';
            for (let j = i; j < i + 10; j += 2) {
                let symbol = expr.slice(j, j + 2);
                if (symbol === '10') {
                    letter += '.';
                } else if (symbol === '11') {
                    letter += '-';
                }
            }
            arr.push(letter);
        }

        arr.forEach((element, index) => {
            if (element === '') {
                phrase.push(' ');
            } else {
                phrase.push(MORSE_TABLE[element]);
                if (arr[index + 1] !== '') {
                    phrase.push('');
                }
            }
        });

        return phrase.join('');
    }
}

module.exports = {
    decode: MorseDecoder.decode,
}
