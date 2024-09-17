import { argv } from 'node:process';
import fs from 'fs';

const path = argv[2];

fs.readdir(path, (err, files) => {
    if (!err) {
        files.sort((a, b) => {
            a - b
        });

        for (const file of files) {
            console.log(file);
        }
        process.exit(0)
    } else {
        console.error(err);
    }
});
