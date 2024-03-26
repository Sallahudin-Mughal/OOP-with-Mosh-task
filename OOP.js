// manual object
// const circle ={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log("draw a circle");
//     }
// }

// circle.draw()
// Factory Function to create an object
function createCircle(radius){
   
    return {radius,
    draw: function(){
        console.log("draw a circle")
    }
}
}
createCircle(4);

// constructor
function Circle(radius){
    this.radius=radius;
    this.defualtlocation = { x:0,y:0}
    this.getDefaultLocation =function(){
        return this.defualtlocation
    }
    this.draw= function(){
        console.log("draw circle with constructor");
    };
    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defualtlocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error("invalid Location")
            defualtlocation = value;
        }
    });
}

Circle.call({},1)
Circle.apply({},[1,2,3,4])
const circle = new Circle(10);
circle.defualtlocation=1;
console.log(circle)







let  draawcircle = new Circle(2);
console.log(draawcircle.draw)


//new section values and reference

for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log('key',circle[key])
}

const key= Object.keys(circle);
console.log(key);

if('radius' in  circle)
    console.log('Circle has radius')


let x ={value:10};
let y =x;
x.value=20;
console.log(x,y);


let num= {value:10}
function increase(num){
    num.value++
}
increase(num)
console.log(num)