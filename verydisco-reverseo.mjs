import { argv } from 'node:process';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const filePath = argv[2]
console.log(filePath);

async function logFile() {
    try {
        const filePath = resolve(filePath);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        
        const words = contents.split(' ');
        const discoVeryArr = [];
        words.map((word) => {
            const halfIndex = word.length % 2 === 0 ? word.length / 2 : (word.length - 1) / 2;
            const part1 = word.slice(0, halfIndex);
            const part2 = word.slice(halfIndex);
            const discoVery = part2 + part1;

            discoVeryArr.push(discoVery);
        })

        console.log(discoVeryArr.join(''))
    } catch (e) {
        console.error(e.message)
    }

}

logFile();
