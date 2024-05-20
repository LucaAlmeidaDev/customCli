import inquirer from 'inquirer';

function optimize(){
    inquirer
    .prompt([
      {
        type: 'checkbox',
        name:'optimizeCheckbox',
        message:'',
        choices:[
            'Clean temp', 'Adjust Power Plan', 'Defrag HardDisk','Reduce visual effects', 'All'
        ],
      },
    ])
    .then(answers => {
        if(answers.optimizeCheckbox === 'Clean temp'){
            cleanTemp();
        }
        else if(answers.optimizeCheckbox === 'Adjust Power Plan'){
            powerPlan();
        }
        else if(answers.optimizeCheckbox === 'Defrag HardDisk'){
            defragHd();
        }
        else if(answers.optimizeCheckbox === 'Reduce visual effects'){
            reduceVisual();
        }
        else if(answers.optimizeCheckbox === 'All'){
            allOptions();
        }
    });
}

export default optimize;