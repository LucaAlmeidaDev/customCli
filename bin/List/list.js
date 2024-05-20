import inquirer from "inquirer";
import optimize from "./Optimize/index.js";
import programsShortcuts from "./programsShortcuts/programsShortcuts.js";

function listHandle(){
    inquirer
    .prompt([
      {
        type:'list',
        name:'optionList',
        message:'Which option do you require?',
        choices:['Optimize The Computer','Programs Shortcuts'],
      },
    ])
    .then(answers => {
      if(answers.optionList === 'Optimize The Computer'){
        optimize();
      }
      else if(answers.optionList === 'Programs Shortcuts'){
        programsShortcuts();
      }
    });
}

export default listHandle;