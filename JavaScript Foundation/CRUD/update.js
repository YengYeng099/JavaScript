    const formdata = document.querySelector("form");
    formdata.addEventListener("submit", (event) => {
    event.preventDefault();
    // Search ID

    const inputId = document.getElementById("search").value;


    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const fileInput = document.getElementById("image");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    // find product by id

    const findProductById = async () => {
        const response = await fetch("https://fakestoreapi.com/products/" + `${Number(inputId)}`);
        const singleProduct = await response.json();

        title.value = singleProduct?.title;
        description.value = singleProduct?.description;
    }
    findProductById();

    //upload files
    const uploadFile = async () => {
    const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
        method: "PUT",
        body: formData,
        },
    );
    const filesResponse = await response.json();
    console.log("+====== Response File: ", filesResponse);
    return filesResponse;
    };
    uploadFile()
    .then((data) => {
        console.log("Location image : ", data?.location);
        const createProductFn = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${Number(inputId)}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            title: title.value,
            description: description.value,
            image: data?.location,
            }),
        });
        const product = await response.json();
        console.log(product);
        };
        createProductFn();
    })
    .catch((error) => console.log(error));
    });
