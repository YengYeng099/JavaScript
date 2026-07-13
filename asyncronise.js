const BASE_FAKESTORE_URL = "https://fakestoreapi.com";

const fetchDataAPI = new Promise((resolve,reject)=>{
    try{
        const response = fetch(`${BASE_FAKESTORE_URL}/products`);
        response.then(
        response => response.json()
        )
        .then(data => resolve(data))
        .catch(error => reject(error))
    }
    catch(error){
        console.log("Error : ",error);
    }
})
fetchDataAPI.then(data => {
    const display = data.map(({title,image,description})=>`
    <div class="card">
        <img class="card__image" src="${image}" alt="Card image">
        <div class="card__body">
            <h2 class="card__title">${title}</h2>
            <p class="card__text" style="line-clamp:3;">${description}</p>
            <button class="card__button">Learn More</button>
        </div>
    </div>`).join("")
    document.getElementById("card-display").innerHTML += display;
})
.catch(error => console.log(error))


