import cleanTempCmd from "./cltemp.js";
import defragHdCmd from "./defragHd.js";
import powerPlanCmd from "./powerPlan.js"
import performanceBoostCmd from "./performanceBoost.js";
import inquirer from "inquirer";

function allOptions(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'allList',
        message:'This option run all the optimize options at once, it can take a few minutes, proceed with this action?',
        choices:[
            'No', 'Yes'
        ],
      },
    ])
    .then(answers => {
        if(answers.allList === 'No'){
            console.log('No')
            
        }
        else if(answers.allList === 'Yes'){
            powerPlanCmd();
            performanceBoostCmd()
            defragHdCmd();
            cleanTempCmd();
        }
    });
}

export default allOptions;