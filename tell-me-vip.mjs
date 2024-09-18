import fs from 'fs';
import { argv } from 'node:process';
import { join } from 'path';

const path = !argv[2] ? '.' : argv[2];
let guests = [];
let formatedGuests = [];

fs.readdir(path, (err, files) => {
    if (err) {
        console.error(err.message);
        process.exit(1);
    }

    const readFilePromises = files.map((file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(`${path}/${file}`, 'utf8', (err, content) => {
                if (err) {
                    return reject(err);
                }

                try {
                    const data = JSON.parse(content);

                    if (data.answer === 'yes') {
                        guests.push(file); // Save the entire file name
                    }
                } catch (parseErr) {
                    console.error('Error parsing:', file, parseErr.message);
                }

                resolve();
            });
        });
    });

    Promise.all(readFilePromises)
        .then(() => {
            if (guests.length > 0) {
                guests.forEach((guest) => {
                    formatedGuests.push(trimGuestName(guest));
                });

                fs.writeFile('vip.txt', formatedGuests.join('\n'), 'utf8', (err) => {
                    if (err) {
                        console.error(err.message);
                        process.exit(1);
                    }
                });
            } else {
                console.log('No VIP guests found.');
            }
        })
        .catch((err) => {
            console.error('Error reading files:', err.message);
            process.exit(1);
        });
});

function trimGuestName(name) {
    const trimmedExt = name.slice(0, -5); // Remove ".json" extension
    const splitted = trimmedExt.split('_');
    return `${splitted[1]} ${splitted[0]}`; // Swap first and last names
}
