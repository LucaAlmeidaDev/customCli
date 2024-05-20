import inquirer from "inquirer";
import checkShortcut from './Options/checkShortcut.js';
import createShortcut from './Options/createShortcut.js';
import deleteShortcut from './Options/deleteShortcut.js';

function programsShortcuts(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'programList',
        message:'',
        choices:[
            'Create Shortcuts', 'Delete Shortcuts', 'Check Shortcuts'
        ],
      },
    ])
    .then(answers => {
        if(answers.programList === 'Create Shortcuts'){
            createShortcut();
        }
        else if(answers.programList === 'Delete Shortcuts'){
            deleteShortcut();
        }
        else if(answers.programList === 'Check Shortcuts'){
            checkShortcut();
        }
    });
}

export default programsShortcuts;