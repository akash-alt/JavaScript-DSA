var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = 12;
var person = ["akash", "developer"];
var copyPerson = __assign({}, person);
console.log(copyPerson);
//************  Classes    **********//
var Counter = /** @class */ (function () {
    function Counter(n) {
        this.employee = [];
        this.name = n;
        this.employee = [];
    }
    ;
    Counter.prototype.describe = function () {
        console.log("department : ", this.name);
    };
    ;
    Counter.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    ;
    Counter.prototype.printEmployeeInfo = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    return Counter;
}());
//* M-1
var accounting = new Counter("akash");
// console.log(accounting);
accounting.describe();
accounting.addEmployee("Sakshi");
accounting.addEmployee("Shruthi");
accounting.addEmployee("akash");
//* here we are able to add due to public method but need to it private to access only in the class
// accounting.employee[2] = "akash" //* Here we will get Error due to private 
//* M-2
// const accountCopy = {name:"akash2",describe:accounting.describe};
// accountCopy.describe();
accounting.printEmployeeInfo();
