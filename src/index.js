const { brushTeeth } = require("./modules/brushTeeth");
const { skincare } = require("./modules/skincare");
const { putOnClothes } = require("./modules/putOnClothes");
const { closeEyes } = require("./modules/closeEyes");
const { sleep } = require("./modules/sleep");


function gettingReadyForSleep(){
    brushTeeth();
    skincare();
    putOnClothes();
    closeEyes();
    sleep();
}

gettingReadyForSleep();

