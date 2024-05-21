import { exec } from 'child_process';
import inquirer from 'inquirer';

function powerPlan(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'powerList',
        message:'Performance Boost disables the background apps, and improves the computer performance and privacy by deleting the services: DiagTrack and dmwappushservice, do you want to continue?',
        choices:[
            'No', 'Yes'
        ],
      },
    ])
    .then(answers => {
        if(answers.powerList === 'No'){
            console.log('No')
        }
        else if(answers.powerList === 'Yes'){
            powerPlanCmd();
        }
    });
}
function powerPlanCmd(){
    exec('powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61', (error, stdout, stderr) => {
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
    exec('powercfg -h off', (error, stdout, stderr) => {
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
    


export default powerPlan;

