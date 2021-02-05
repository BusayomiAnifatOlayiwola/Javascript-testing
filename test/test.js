const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;

const { name, age, isCool, add, array, object, substract, multiply } = require('../index')

//datatype
//equality
//length
//object , property, value

describe('Test name variable', function(){
    it('should return a string as a type', function(){
        assert.typeOf(name, 'string')
    })
    it('should return name as a result', function(){
        assert.equal(name, 'Yomi')
    })
    it('should have length of 4', function(){
        assert.lengthOf(name, 4)
    })
})


describe('Test age variable', function(){
    it('should return a number as a type', function(){
        assert.typeOf(age, 'number')
    })
    it('should return 37 as a result', function(){
        assert.equal(age, 37)
    })
   
})

describe('Test isCool variable', function(){
    it('should return a boolean as a type', function(){
        assert.typeOf(isCool, 'boolean')
    })
    it('should return true as a result', function(){
        assert.equal(isCool, true)
    })
   
})

describe('Test object variable', function(){
    it('should return a object as a type', function(){
        assert.typeOf(object, 'object')
    })
    it('should equal SEI-111', function(){
        assert.equal(object.class, 'SEI-111')
    })
   
})


describe('add function', function(){
    //make sure it a function
    //right ouput
    //right datatype
    it('should be a function', function(){
        expect(add).to.be.a('function')
    })
    it('should return 4', function(){
        let myFavoriteNumber = add(1, 8)
        expect(add(2,2)).to.equal(4);
        expect(myFavoriteNumber).to.equal(9);
    })
    it('should have number type as output', function(){
        expect(add(2,2)).to.be.a('number')
    })
})


describe('Test array variable', function(){
    it('should be an array', function(){
        expect(array).to.be.a('array');
    })
    it('should 4 different datatypes', function(){
       //set up variable
       let result = 0;
       //iterate thru array to check each datatype
       for(let i=0; i < array.length; i++){
           let element = array[i];
           if(typeof element === 'boolean'){
               result += 1;
            }else if(typeof element === 'string'){
                result += 1;
            }else if(typeof element === 'number'){
                result += 1;
            }else if(typeof element === 'object'){
                result += 1;
       }
    }
    expect(result).to.equal(4)
    })
   
})


describe('Multiply function', function(){
    //make sure it a function
    //right ouput
    //right datatype
    it('should be a function', function(){
        expect(multiply).to.be.a('function')
    })
    it('should return 9', function(){
        let myFavoriteNumber = multiply(3, 2)
        expect(multiply(3,3)).to.equal(9);
        expect(myFavoriteNumber).to.equal(6);
        assert.equal(multiply(-1, 3), -3)
    })
    it('should have number type as output', function(){
        expect(multiply(7,2)).to.be.a('number')
    })
})


