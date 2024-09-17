import { argv } from 'node:process';
import fs from 'fs';

const dir = argv[2]
const path = dir ? dir : '.';

console.log("hhgggfg")
fs.readdir(path, (err, files) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(files.length);
})
