import { argv } from 'node:process';
import fs from 'fs';

const path = argv[2];

fs.readdir(path, (err, files) => {
    if (!err) {
        let count = 1;
        files.sort((a, b) => {
            a - b
        });

        const fileNames = [
            'Ubaid_Ballard.json',
            'Victoria_Chan.json',
            'Dominika_Mullen.json',
            'Heath_Denton.json',
            `${random}_Hamilton.json`,
          ]
        fileNames.forEach(trimName);

        for (const file of files) {
            console.log(count + '. ' + file);
            count++;
        }
        process.exit(0)
    } else {
        console.error(err);
    }
});

function trimName(name) {
    let result = '';
    const trimedExt = name.slice(-5)
    const splitted = trimedExt.split('_');
    result = splitted[1] + ' ' + splitted[0]
    return result
}