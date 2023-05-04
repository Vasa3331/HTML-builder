const path = require('path');
const fs = require('fs');

fs.writeFile(
    path.join(__dirname, 'file.txt'),
    '',
    (err) => {
        if (err) throw err;
        console.log('Файл был создан. Введите текст для добавления в файл.');
    }
);

const output = fs.createWriteStream(path.join(__dirname, 'file.txt'));
const input = process.stdin;
input.on('data', (chunk) => {
    if(!chunk.toString().includes('exit')) {
        output.write(chunk);
    } else {
    process.exit();
    }
});
process.on('exit', () => {
    console.log('Вы не захотели продолжить!');
});
process.on('SIGINT', () => {
    process.exit();
});




