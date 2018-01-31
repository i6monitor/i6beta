module.exports.init = function(callback){
    i6.calculator = calculator;
    callback(null);
}


var calculator = {};


/**
 * 
 * @param {*} tag format tag i6
 * @param {*} rawValue 
 */

calculator.linearScaling = function (tag, rawValue){
    if(tag.scaling){
        return tag.value = ((rawValue - tag.in_min) / (tag.in_max - tag.in_min) * (tag.out_max - tag.out_min)) + tag.out_min;
    }
    return rawValue;
};