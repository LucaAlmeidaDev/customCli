import { exec } from 'child_process';

function cleanTemp(){

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