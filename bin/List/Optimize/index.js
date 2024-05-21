import inquirer from 'inquirer';
import cleanTemp from './Options/cltemp.js';
import defragHd from './Options/defragHd.js';
import performanceBoost from './Options/performanceBoost.js';
import powerPlan from './Options/powerPlan.js';

function optimize(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'optimizeList',
        message:'',
        choices:[
            'Clean temp', 'Adjust Power Plan', 'Defrag HardDisk','Performance Boost', 'All'
        ],
      },
    ])
    .then(answers => {
        if(answers.optimizeList === 'Clean temp'){
            cleanTemp();
        }
        else if(answers.optimizeList === 'Adjust Power Plan'){
            powerPlan();
        }
        else if(answers.optimizeList === 'Defrag HardDisk'){
            defragHd();
        }
        else if(answers.optimizeList === 'Performance Boost'){
            performanceBoost();
        }
        else if(answers.optimizeList === 'All'){
            allOptions();
        }
    });
}

export default optimize;