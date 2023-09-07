let myCar={
    make:"bmw",
    color:"red",
    model:"modelx",
    isNew:true,
    wheels:4

};
let newColor ="color"
myCar[newColor]="green"
newColor = "forSale"
myCar[newColor]="true"
console.log(myCar.make,myCar.model)
console.log(myCar.forSale)


let people ={
    friends:[]
};

let fr1 ={
    firstName:"cassey",
    lastname:"darcy",
    id: 98765
}
let fr2 ={
    firstName:"lacey",
    lastname:"peter",
    id: 56748
}
let fr3 ={
    firstName:"nancy",
    lastname:"pency",
    id: 234567
}

//people.friends[0]=fr1
//people.friends[1]=fr2
//people.friends[2]=fr3
console.log(people.friends.push(fr1,fr2,fr3))
console.log(people)

const theList= ["laurence","skevis",true,35,null,undefined,{test:"one",score:55},["one","two"]]
theList.pop()
theList.shift()
console.log(theList)
theList.unshift("FIRST")
theList[4]="hello world"
console.log(theList)
theList[3]="MIDDLE"
console.log(theList)
theList.push="LAST"
console.log(theList)