module.exports = function solveEquation(equation) {
  // your implementation
  equation = equation.replace(/\s/g, '');
    
    var coeff = equation.match(/(([+-]|^)\d+)|([+-] \d+)/g);

    if (coeff != null) {
      coeff = coeff.map(Number);
    }

    var a = b = 1; 
    var c = 0;
    
    aReg = /((^[+-]|^)\d+)/;
    bReg = /x*2+[+-]+\d+./;
    cReg = /[+-]\d+$/;

    if (equation.search(aReg)!=-1){
        a = coeff.shift();
    }
    if (equation.search(bReg)!=-1){
        b = coeff.shift();
    }
    if (equation.search(cReg)!=-1){
        c = coeff.shift();
    }

    var D = b ** 2 - 4 * a * c;
   
    if (D > 0){
        x1 = Math.round((-b + D ** 0.5)/(2 * a));
        x2 = Math.round((-b - D ** 0.5)/(2 * a));
        return (x1 < x2) ? [x1, x2] : [x2, x1];
    } else if (D == 0) {
        return [((-b) + D ** 0.5)/(2 * a), null];
    } else 
        return [null, null];
}