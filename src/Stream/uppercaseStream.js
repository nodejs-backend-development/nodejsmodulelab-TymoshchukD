const { Transform } = require('stream');

class UppercaseStream extends Transform {
    _transform(chunk, encoding, callback) {
        const text = chunk.toString();

        let result = '';
        for (let char of text) {
            if (/[a-zа-я]/i.test(char) && isNaN(char)) {
                result += char.toUpperCase();
            } else {
                result += char;
            }
        }

        callback(null, result);
    }
}

process.stdin.setEncoding('utf8');

process.stdin
    .pipe(new UppercaseStream())
    .pipe(process.stdout);