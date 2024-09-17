import fs from 'fs'
import { argv } from 'node:process'

const path = !argv[2] ? '.' : argv[2];
let guests = [];
let formatedGuests = [];
let count = 1

fs.readdir(path, (err, files) => {
    if (!err) {
        files.forEach(file => {
            const content = fs.readFile(`${path}/${file}`, 'utf8');
            const data = JSON.parse(content);

            for (const obj of data) {
                if (obj.answer === 'yes') {
                    guests.push(obj.name)
                }
            }
        })

        guests.sort();

        for (const guest of guests) {
            let line = `${count}. ${guest}`;
            formatedGuests.push(line);
            count++;
        }
        fs.writeFile('vip.txt', formatedGuests.join('\n'), 'utf8', (err) => {
            if (err) {
                console.error(err.message)
                process.exit(1);
            }
        });


    } else {
        console.error(err.message);
        process.exit(1);
    }
})
