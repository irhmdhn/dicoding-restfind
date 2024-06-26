const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'src/public/images/heros');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
    // 1000px, prefix -large.jpg
    sharp(`${target}/${image}`)
        .resize(1000)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));
    // 720, prefix -medium.jpg
    sharp(`${target}/${image}`)
        .resize(720)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`));
    // 480px, prefix -small.jpg
    sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
