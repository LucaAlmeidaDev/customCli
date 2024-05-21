import { exec } from 'child_process';
import inquirer from 'inquirer';

function cleanTemp(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'tempList',
        message:'This option cleans all the temporary files from your computer, proceed with this action?',
        choices:[
            'No', 'Yes'
        ],
      },
    ])
    .then(answers => {
        if(answers.tempList === 'No'){
        }
        else if(answers.tempList === 'Yes'){
            cleanTempCmd();
        }
    });
}
function  cleanTempCmd(){
    exec('del /q/f/s %TEMP%\\*', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

export default cleanTemp;