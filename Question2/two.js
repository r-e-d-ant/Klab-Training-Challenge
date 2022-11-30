const item = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 }
]

var x = 1
var i = 0
var all = item[0].price
while (x < 6) {
    if (item[x].price > all) {
        i = x
        x++
    } else {
        x++
    }
}
console.log(`The expensive is ${item[i].name} with ${item[i].price} $`)