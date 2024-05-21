import cleanTemp from "./cltemp.js";
import defragHd from "./defragHd.js";
import powerPlan from "./powerPlan.js"
import performanceBoost from "./performanceBoost.js";

function allOptions(){
    powerPlan();
    performanceBoost();
    defragHd();
    cleanTemp();
};  

export default allOptions;