const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m'
};

process.stdin.setEncoding('utf8');

process.stdin.on('data', (text) => {
    const words = text.toString().split(/(\s+)/); // зберігає пробіли

    const result = words.map(w => {
        if (/\d+/.test(w)) {
            return colors.yellow + w + colors.reset;
        }

        if (/^error$/i.test(w)) {
            return colors.red + w + colors.reset;
        }

        if (/^success$/i.test(w)) {
            return colors.green + w + colors.reset;
        }

        return w;
    }).join('');

    process.stdout.write(result);
});