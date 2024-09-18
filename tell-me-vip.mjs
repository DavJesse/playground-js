import fs from 'fs'
import { argv } from 'node:process'

const path = !argv[2] ? '.' : argv[2];
let guests = [];
let formatedGuests = [];
let count = 1

fs.readdir(path, (err, files) => {
    if (!err) {

        files.forEach((file) => {
            fs.readFile(`${path}/${file}`, 'utf8', (err, content) => {
                if (err) {
                    console.error(err.message)
                    process.exit(1);
                }

                try {
                    const data = JSON.parse(content);
        
                    if (data.answer === 'yes') {
                        guests.push(file[0])
                    }
                } catch (parseErr) {
                    console.error('Erro parsing: ', file, parseErr.message);
                }

                if (guests.length > 0) {
                    guests.forEach((guest) => {
                        formatedGuests.push(trimGuestName(guest));
                    });

                    fs.writeFile('vip.txt', formatedGuests.join('\n'), 'utf8', (err) => {
                        if (err) {
                            console.error(err.message)
                            process.exit(1);
                        }
                    });
                }
            });
        });     

    } else {
        console.error(err.message);
        process.exit(1);
    }
})

function trimGuestName(name) {
    let result = '';
    const trimedExt = name.slice(0, -5)
    const splitted = trimedExt.split('_');
    result = splitted[1] + ' ' + splitted[0]
    return result
}