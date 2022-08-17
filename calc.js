function sin(){
    document.calc.screen.value = Math.sin(document.calc.screen.value); 
}

function cos(){
    document.calc.screen.value = Math.cos(document.calc.screen.value); 
}
function tan(){
    document.calc.screen.value = Math.tan(document.calc.screen.value); 
}
function log(){
    document.calc.screen.value = Math.log(document.calc.screen.value); 
}
function display(del){
    var d = document.calc.screen.value ;
    document.calc.screen.value = d.substr(0,d.length-1); 
}
function number(value){
    document.calc.screen.value += value; 
}
function equal(){
    document.calc.screen.value = eval(document.calc.screen.value);   
}
