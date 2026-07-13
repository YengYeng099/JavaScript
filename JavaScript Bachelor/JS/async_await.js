// Fetching with async and await 

const BASE_FAKESTORE_URL = "https://fakestoreapi.com";
let display = ""
let productDetailCard = ""
const fetchDataAPI = async () =>{
    const response = await fetch(`${BASE_FAKESTORE_URL}/products`);
    const data = await response.json();
    console.log(data);

    data.map(({title,image,description,id})=>{
        display += `
        <a href="./productDetail.html?id=${id}">
        <div class="card">
                <img class="card__image" src="${image}" alt="Card image">
            <div class="card__body">
                <h2 class="card__title">${title}</h2>
                <p class="card__text" style="line-clamp:3;">${description}</p>
                <button class="card__button">Learn More</button>
            </div>
        </div>
        </a>
        `;}
        ).join('') 
        console.log(display)
        document.getElementById("card-display").innerHTML += display; 
        productDetailCard = `
            <div class="card">
                <img class="card__image" src="${data.image}" alt="Card image">
            <div class="card__body">
                <h2 class="card__title">${data.title}</h2>
                <p class="card__text" style="line-clamp:3;">${data.description}</p>
                <button class="card__button">Learn More</button>
            </div>
        </div>
    `;
    document.getElementById("product-detail").innerHTML += productDetailCard
    }

const params = new URLSearchParams(window.location.search);
const productID = params.get('id')
fetchDataAPI(productID);