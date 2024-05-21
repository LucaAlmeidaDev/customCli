import Datastore from 'nedb';
import figlet from 'figlet';
import chalk from 'chalk';
import readlineSync from 'readline-sync';
import listHandle from "./List/list.js";

const db = new Datastore({ filename: 'userdata.db', autoload: true });
const colorName = chalk.blueBright 
const error = chalk.redBright

function checkAndSaveUserName() {
    db.findOne({ type: 'user' }, (err, doc) => {
        if (err) {
            console.error(error('Database error:'), err);  
            return;
        }
        if (doc) {
            console.log(
                figlet.textSync (`Hello, ${doc.name}!`, {
                  font: "Larry 3D",
                  horizontalLayout: "default",
                  verticalLayout: "default",
                  width: 200,
                  whitespaceBreak: true,
                })
              );
              listHandle();
        } else {
            const userName = readlineSync.question('What is your name? ');
            db.insert({ type: 'user', name: userName }, (err, newDoc) => {
                if (err) {
                    console.error(error('Error saving to database:'), err);
                    return;
                }
                console.log(colorName(`Hello, ${newDoc.name}! Your name has been saved.`));
                checkAndSaveUserName();
            });
        }
    });
}

export default checkAndSaveUserName;