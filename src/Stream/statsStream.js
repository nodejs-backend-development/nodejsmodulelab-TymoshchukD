const { Transform } = require('stream');

class StatsStream extends Transform {
    constructor() {
        super();
        this.wordCount = 0;
        this.charCount = 0;
    }

    _transform(chunk, encoding, callback) {
        const text = chunk.toString();

        // текст
        this.charCount += text.length;

        // слова
        const words = text.trim().split(/\s+/).filter(Boolean);
        this.wordCount += words.length;

        const output =
            `TEXT: ${text}\n` +
            `WORDS: ${this.wordCount}\n` +
            `CHARS: ${this.charCount}\n\n`;

        callback(null, output);
    }
}

process.stdin.setEncoding('utf8');

process.stdin
    .pipe(new StatsStream())
    .pipe(process.stdout);