const fruits = () => {
    if (true) {
        var fruits1 = 'apple'
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
}

fruits()

//valores diferentes
let x = 1

{
    let x = 2
    console.log(x);
}

console.log(x);

//valores iguales reasigno
var x = 1

{
    var x = 2
    console.log(x);
}

console.log(x);

//asignacion let y var

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction()

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction()