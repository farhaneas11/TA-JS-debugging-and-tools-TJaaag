function addNum(numa , numb){
    return numa + numb;
}
function multiplyNum (numa , numb){
    return numa * numb;
}
let result , expected;
function testadd (){
    result = addNum(12,12);
    expected = 24;
    expect(result).toEqual(expected); 
}

function testmultiply(){
    result = multiplyNum(5,6);
    expected = 30;
    expect(result).toEqual(expected);    
}

function testerror(message,callback ){
    try {
        callback();
        console.log('right',message);
    } catch (error) {
        console.error(error);
        console.log('wrong',message);
    }
}
function expect(actual){
    return{
        toEqual: function (expected){
            if (actual != expected){
                throw new Error (`$error for finding not the same ${actual} != ${expected}`);
            }
        },
        toBeEqual: function (expected){
            if (typeof actual != expected){
                throw new Error (`$error for finding not the same ${typeof actual} != ${expected}`);
            }
        }
    }    
}
testerror("adding two numbers",testadd);
testerror("multiply two numbers",testmultiply);