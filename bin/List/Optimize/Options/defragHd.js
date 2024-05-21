import { exec } from 'child_process';
import inquirer from 'inquirer';

function defragHd(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'defragList',
        message:'This option defragments your HD, and it can take quite some time, proceed with this action?',
        choices:[
            'No', 'Yes'
        ],
      },
    ])
    .then(answers => {
        if(answers.defragList === 'No'){
            console.log('No')
        }
        else if(answers.defragList === 'Yes'){
            defragHdCmd();
        }
    });
}
function defragHdCmd(){
    
    exec('defrag /c /b /v', (error, stdout, stderr) => {
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

export default defragHd;