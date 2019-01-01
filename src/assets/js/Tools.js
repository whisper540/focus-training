//mix方法实现多继承
Object.prototype.mix = function() {
    var i = 0,
        len = arguments.length,
        arg;
    
    for(; i < len; i++) {
        arg = arguments[i];
        for(var property in arg) {
            this[property] = arg[property];
        }
    }
};
// //用法：
// otherBook.mix(book1, book2);

//为所有方法统一添加方法
Function.prototype.addMethod = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};
// 用法：
// let Methods = function() {};
// Methods.addMethod('checkName', function() {
//     //
// }).addMethod('checkEmail', function() {
//     //
// });
// let m = new Methods();
// m.checkName();

//定义检测类
const CheckObject = function() {};
CheckObject.prototype = {
    checkName: function() {
        //
        return this;
    },

    checkEmail: function() {
        //
        return this;
    },

    checkPassword: function() {
        //
        return this;
    }
};

//提示信息简单工厂类
const LoginAlert = function(text) {
    this.content = text;
};
LoginAlert.prototype.show = function() {
    //显示
};
const PopFactory = function(name) {
    switch(name) {
        case 'alert':
            return new LoginAlert();
        case 'confirm':
            return new LoginAlert();
        case 'prompt':
            return new LoginAlert();
        default:
            return new LoginAlert();
    }
};

//简单工厂模式创建提示框
const createPop = function(type, text) {
    const o = new Object();
    o.content = text;
    o.show = function() {
        //显示方法
    };
    switch(type) {
        case 'alert':
            break;
        case 'confirm':
            break;
        case 'prompt':
            break;
        default:
            break;
    }
    return o;
};

//安全工厂方法
const SafeFactory = function(type, content) {
    if( this instanceof SafeFactory ) {
        let s = new this[type](content);
        return s;
    } else {
        return new SafeFactory(type, content);
    }
};
SafeFactory.prototype = {
    Java: function() {
        //...
    },
    JavaScript: function() {
        //...
    }
};

//抽象工厂方法
const VehicleFactory = function(subType, SuperType) {
    if(typeof VehicleFactory[SuperType === 'function']) {
        function F() {};
        F.prototype = new VehicleFactory[SuperType]();
        subType.constructor = subType;
        subType.prototype = new F();
    } else {
        throw new Error('未创建该抽象类');
    }
};
VehicleFactory.Car = function() {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用!');
    }
};
// //用法：
// let BMW = function(price, speed) {
//     this.price = price;
//     this.speed = speed;
// };
// VehicleFactory(BMW, 'Car');
// BMW.prototype.getPrice = function() {
//     return this.price;
// };
// let bmw1 = new BMW(1000,1000);
// console.log(bmw1.getPrice());
// console.log(bmw1.type);

export { CheckObject, PopFactory, createPop, SafeFactory, VehicleFactory };