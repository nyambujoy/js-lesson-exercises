let shoplist=["milk","bread","apples"]
/*
console.log(shoplist.length)

shoplist[1]="banana"
console.log(shoplist)
console.log(shoplist.indexOf("milk"))

shoplist[1]=["banana","eggs"]
console.log(shoplist)

console.log(shoplist.pop())
console.log(shoplist.sort())
console.log(shoplist.indexOf("milk"))*/

console.log(shoplist.splice(1,1,"banana","eggs"))
console.log(shoplist.pop())
console.log(shoplist.sort())

console.log(shoplist.splice(1,0,"carrots","lettuce"))
console.log(shoplist)
let juicy=["juice","pop"]
let lis=shoplist.concat(juicy,juicy)
console.log(lis.lastIndexOf("pop"))

const myArr=[1,2,3]
const newArr=[[1,2,3],[1,2,3],[1,2,3]]
console.log(newArr[0][1])
console.log(newArr[1][1])
console.log(newArr[2][1])





