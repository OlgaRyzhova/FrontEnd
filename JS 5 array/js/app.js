// Оця тема вже мені подобається, прямо моя)))

// MIN 1

let mamShoppingList = [
    {
        productName: 'Milk',
        quantity: 2,
        status: 'bought',
        price: 32.45,
        amount: 64.90,
    },
    {
        productName: 'Bread',
        quantity: 1,
        status: 'not bought',
        price: 45.23,
        amount: 45.23,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
    {
        productName: 'Eggs',
        quantity: 3,
        status: 'not bought',
        price: 50.61,
        amount: 151.83,
    },
    {
        productName: 'Sour cream',
        quantity: 2,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
]

console.log(mamShoppingList);

// MIN 1.1 

mamShoppingList.sort((a,b) => {
    if (a.status > b.status) {
        return 1
    } else {
        return -1
    }
})


// MIN 1.2

mamShoppingList.forEach((mamShoppingList) => {
    let buyStatus = `I ${mamShoppingList.status} it`;
    console.log(buyStatus);
});


//  Norm 1

let productList = ['flowers', 'baloon', 'candle', 'wine', 'bread', 'present', 'cake'];

productList.splice(3,2);
console.log(productList);


// Norm 2

let shoppingList = [
    {
        productName: 'Milk',
        quantity: 2,
        price: 32.45,
        amount: 64.90,
    },
    {
        productName: 'Bread',
        quantity: 1,
        price: 45.23,
        amount: 45.23,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        price: 160.99,
        amount: 160.99,
    },
    {
        productName: 'Eggs',
        quantity: 3,
        price: 50.61,
        amount: 151.83,
    },
    {
        productName: 'Sour cream',
        quantity: 2,
        price: 160.99,
        amount: 160.99,
    },
    {
        productName: 'Eggs',
        quantity: 1,
        price: 50.61,
        amount: 50.61,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        price: 160.99,
        amount: 160.99,
    },
]

let newList = shoppingList.filter(el => el.productName === 'Eggs', 'Cheese');

console.log(newList);


// MAX 1

// Я не зовсім зрозуміла як я можу зробити множення кількості та ціни всіх продуктів, щоб у мене вийшла сума. Я зробила лише по сумі. Підскажи будь ласка)

class products extends Array {
    sum(key) {
        return this.reduce((a, b) => a + (b[key] || 0), 0);
    }
}
const dailyProducts = new products(...[
    {
        productName: 'Milk',
        quantity: 2,
        status: 'bought',
        price: 32.45,
        amount: 64.90,
    },
    {
        productName: 'Bread',
        quantity: 1,
        status: 'not bought',
        price: 45.23,
        amount: 45.23,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
    {
        productName: 'Eggs',
        quantity: 3,
        status: 'not bought',
        price: 50.61,
        amount: 151.83,
    },
    {
        productName: 'Sour cream',
        quantity: 2,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
]);

console.log(dailyProducts.sum('amount'));


// MAX 2

let boughtList = [
    {
        productName: 'Milk',
        quantity: 2,
        status: 'bought',
        price: 32.45,
        amount: 64.90,
    },
    {
        productName: 'Bread',
        quantity: 1,
        status: 'not bought',
        price: 45.23,
        amount: 45.23,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
    {
        productName: 'Eggs',
        quantity: 3,
        status: 'not bought',
        price: 50.61,
        amount: 151.83,
    },
    {
        productName: 'Sour cream',
        quantity: 2,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
];

let findedObj = boughtList.filter(el => el.status ==='bought');

console.log(findedObj);


// MAX 3

let sortList = [
    {
        productName: 'Milk',
        quantity: 2,
        status: 'bought',
        price: 32.45,
        amount: 64.90,
    },
    {
        productName: 'Bread',
        quantity: 1,
        status: 'not bought',
        price: 45.23,
        amount: 45.23,
    },
    {
        productName: 'Cheese',
        quantity: 1,
        status: 'bought',
        price: 145.62,
        amount: 145.62,
    },
    {
        productName: 'Eggs',
        quantity: 3,
        status: 'not bought',
        price: 50.61,
        amount: 151.83,
    },
    {
        productName: 'Sour cream',
        quantity: 2,
        status: 'bought',
        price: 160.99,
        amount: 160.99,
    },
];

function sortHelper(a, b) {
    return b.amount-a.amount;
}

function sortHelper(a, b) {
    return a.price-b.price;
}

sortList.sort(sortHelper);
console.log(sortList);