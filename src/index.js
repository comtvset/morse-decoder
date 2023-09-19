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

function decode(expr) {
    let arr = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    const part = expr.slice(i, i + 10);
    arr.push(part);
  }

  let morseSymbols = [];

  for (let x = 0; x < arr.length; x++) {
    let arr2 = [];
    let symbol = [];

    for (let i = 0; i < arr[x].length; i = i + 2) {
      const part = arr[x].slice(i, i + 2);
      arr2.push(part);
    }

    for (let v = 0; v < arr2.length; v++) {
      if(arr2[v] === '10') {
        symbol.push('.');
        } else if (arr2[v] === '11') {
          symbol.push('-');
        } else if (arr2[v] === '**') {
          symbol.push(' ');
        }
    }
    let concatSymbols = symbol.join().replace(/[\s,%]/g, '');
    morseSymbols.push(concatSymbols)
  }

  let sentense = [];

  for (let f = 0; f < morseSymbols.length; f++) {
    let cur = morseSymbols[f]
    if(cur === '') {
      sentense.push('$')
    } else {sentense.push(MORSE_TABLE[cur])}
  }

  return sentense.join().replace(/[\s,%]/g, '').replaceAll('$', ' ')
}

module.exports = {
    decode
}