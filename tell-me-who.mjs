import { argv } from 'node:process';
import fs from 'fs';

const path = argv[2];

fs.readdir(path, (err, files) => {
    if (!err) {
        let count = 1;
        files.sort((a, b) => {
            a - b
        });

        for (const file of files) {
            console.log(count + '. ' + file);
            count++;
        }
        process.exit(0)
    } else {
        console.error(err);
    }
});
