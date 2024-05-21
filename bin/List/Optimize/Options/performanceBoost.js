import { exec } from 'child_process';
import inquirer from 'inquirer';

function performanceBoost(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'performanceList',
        message:'Performance Boost disables the background apps, and improves the computer performance and privacy by deleting the services: DiagTrack and dmwappushservice, do you want to continue?',
        choices:[
            'No', 'Yes'
        ],
      },
    ])
    .then(answers => {
        if(answers.performanceList === 'No'){
            console.log('No')
        }
        else if(answers.performanceList === 'Yes'){
            performanceBoostCmd();
        }
    });
}
function performanceBoostCmd(){
    exec('Reg Add HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\BackgroundAccessApplications /v GlobalUserDisabled /t REG_DWORD /d 1 /f', (error, stdout, stderr) => {
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
    exec('sc delete DiagTrack', (error, stdout, stderr) => {
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
    exec('sc delete dmwappushservice', (error, stdout, stderr) => {
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

export default performanceBoost;
