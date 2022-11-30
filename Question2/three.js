const item = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 }
]
var x = 0
var somme = 0
while (x < 6) {
    somme = somme + item[x].price
    x++
}
console.log(`Combined full price ${somme} $`)