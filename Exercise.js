const rawResponse = `
{
"status": "success",
"products": [
{
"id": "p-1001",
"name": "Mechanical Keyboard K1",
"price": 45.5,
"inStock": true,
"category": "Accessories",
"colors": [
{ "name": "Black", "images": ["k1-black-1.jpg", "k1-black-2.jpg"] },
{ "name": "White", "images": ["k1-white-1.jpg"] }
]
},
{
"id": "p-1002",
"name": "Wireless Mouse M2",
"price": 15.99,
"inStock": false,
"category": "Accessories",
"colors": [
{ "name": "Gray", "images": ["m2-gray-1.jpg"] }
]
},
{
"id": "p-1003",
"name": "27-inch Monitor",
"price": 189.0,
"inStock": true,
"category": "Displays",
"colors": [
{ "name": "Black", "images": ["mon-black-1.jpg", "mon-black-2.jpg", "mon-black-3.jpg"] }
]
}
]
}
`;

// Exercise 1
async function getData() {
    try {
        const data = JSON.parse(rawResponse);

        console.log("Total products:", data.products.length);
        console.log("First product name:", data.products[0].name);
    } catch (error) {
        console.error(error);
    }
}

getData();

// Exercise 2
async function filterStock() {
    try {
        const data = JSON.parse(rawResponse);

        const inStock = data.products.filter((a)=>{
            return a.inStock;
        })
        const inStockName = inStock.map((a)=>{
            return a.name;
        })
        console.log(inStock)
        console.table([inStockName])
    
    }
    catch(error) {
        console.error(error)
    }
}
filterStock();

// Exercise 3

async function colorVariants() {
    try {
        const data = JSON.parse(rawResponse);

        const product = data.products.find((a) => a.id === "p-1001");
        if (product) {
            product.colors.forEach(({ name, images }) => {
                console.log(`${name} : ${images.length}`)
            })
        }
    }
    catch(error) {
        console.error(error)
    }
}
colorVariants();

// Exercise 4

async function CalculateOrder() {
    try {
        const cart = [
            { name: "Keyboard", price: 45.99, quantity: 1 },
            { name: "Mouse", price: 19.99, quantity: 2 },
            { name: "Monitor", price: 129.99, quantity: 1 }
        ];
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const order = { items: cart, total, placedAt: new Date().toISOString() };
        const orderJSON = JSON.stringify(order, null, 2);
        console.log(orderJSON);
    }
    catch (error) {
        console.error(error);
    }
}
CalculateOrder();
const WrongJson = `{
    "name" : "hokchheng"
`
async function safeParse(str) {
    try {
        const data = JSON.parse(str);
    }
    catch(error) {
        console.error("Please check your JSON Format again ❌")
        return null;
    }
}
safeParse(WrongJson);

async function makeSummaryTable() {
    try {
        const data = JSON.parse(rawResponse);

        const obj = {
            Accessories: data.products.filter((a) => a.category === "Accessories")
            .map((a) => a.name),
            Display : data.products.filter((a) => a.category === "Displays")
            .map((a) => a.name)
        };
        const objToJson = JSON.stringify(obj, null, 2);
        console.log(objToJson);
    } catch (error) {
        console.error("Please check your JSON Format again ❌");
        return null;
    }
}
makeSummaryTable();
