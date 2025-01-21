
module.exports.colorIt = colorIt

function colorIt(range) {
    validate(range);
    const colors = require("colors/safe");

    const from = range[0].split('-')[0];
    const to = range[0].split('-')[1];

    function colorFunction() {
        const colorsAr = [colors.green, colors.yellow, colors.red];
        let curCol = 0;
        return (text) => {
            console.log(colorsAr[curCol](text));
            curCol += 1;
            if (curCol >= colorsAr.length) curCol = 0;
        }
    }

    const getColor=colorFunction();
    for (let i = from; i <= to; i++) {
        getColor(i);
    }

}

function validate(inputRange){
    let digits=null;
    try {
        digits=inputRange[0].split('-');
        const d1= !isNaN(digits[0]);
        const d2=!isNaN(digits[1]);
        const notDigintsInputed=d1 && d2;
        if(!notDigintsInputed)throw new Error(); 
    } catch (error) {
        throw new Error("Исходные данные должны быть введены в формате 20-50"); 
    }

    const isInteger=(dig)=>{
        if(dig.indexOf(".")>-1)return false;
        if(dig.indexOf(",")>-1)return false;
        return true;
    }

    const anyNonInteger=isInteger(digits[0]) && isInteger(digits[1]);
    if(!anyNonInteger)console.log("Среди чисел есть не простые числа")

}