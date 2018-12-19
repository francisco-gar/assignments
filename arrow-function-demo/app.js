// () => {}  es5


// es6
const doStuff = () => {

}

//anonymous
() => { }

// one argument
x => {
    console.log('i dont need partheses')
}

//multiple parameters then have to have parantheses
(x, y) => {
    console.log('you must have partheses');
}

// return single expression
const myltiplyBy2 = x => 2 * x;

// returning object needs parantheses
x => ({ name: 'Ben'});

//multiple lines or contains statements
x => {
    console.log(x);
    return 'this has multiple lines'
}

const functionCongaLine = [() => {},]

functionCongaLine[0]();

//down the road
const wtf = () => () => () => () => {};
wtf()()()();


// arrow functions do not replace es5 functions
// they are not synonymous/ not the same
// has to do with the keyword this

function getThis(){
    // console.log(this);
}

const object = {
    name: 'same thing',
    getThis,
    nested: {
        name: 'nested object',
        getThis
    }
}

object.getThis()
object.nested.getThis()

//



const person = {
    name: 'TOM',
    clothes: ['shirt', 'socks', 'pants', 'hat'],
    getDressed: function(){
        this.clothes.forEach(article => {
            this.currentlyWearing.push(article);
        });
        console.log(this.currentlyWearing);
    },
    currentlyWearing: []
    
}

person.getDressed()

const object

const Test = () => {
    this.name
}