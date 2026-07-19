const BASE_FAKESTORE_URL = "https://fakestoreapi.com";
const getProduct = async () => {
  try {
  const getData = await fetch(`${BASE_FAKESTORE_URL}/products`);
  const response = await getData.json();
  const cardDisplay = document.getElementById('card-display');
  const display = response.map(({id,title,image,description,price}) => 
    `        
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
    `).join('');
    cardDisplay.innerHTML += display;
  }
  catch (error) {
    console.log(error)
  }
}

const ProductDetail = async () => {
  const productDetail = document.getElementById("product-detail");
  const params = new URLSearchParams(window.location.search);
  const productID = params.get('id');

  const gettingIndividualProduct = await fetch(`${BASE_FAKESTORE_URL}/products/${productID}`);
  const data = await gettingIndividualProduct.json();
  productDetail.innerHTML = `
        <a class="back-link" href="./asyn.html">&larr; Back to products</a>
        <div class="detail-card">
            <div class="detail-card__image-wrap">
                <img class="detail-card__image" src="${data.image}" alt="${data.title}">
            </div>
            <div class="detail-card__body">
                <span class="detail-card__category">${data.category}</span>
                <h2 class="detail-card__title">${data.title}</h2>
                <p class="detail-card__rating">★ ${data.rating.rate} <span>(${data.rating.count} reviews)</span></p>
                <p class="detail-card__price">$${data.price}</p>
                <p class="detail-card__text">${data.description}</p>
                <button class="detail-card__button">Add to cart</button>
            </div>
        </div>
    `;
}
getProduct();
ProductDetail();