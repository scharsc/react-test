var gradesCalc = function () {

    var myGrade = 1;
    return {
        failing: () => {
            return myGrade > 4 ? "you failed " : "everything ok";
        }, 
        setgrade: (num) => {
            myGrade  = num;
        }
    }

}();

console.log("bla")
console.log(gradesCalc.failing());
console.log("foio")
gradesCalc.setgrade(5);
console.log(gradesCalc.failing());
