const formdata = document.querySelector('form');
formdata.addEventListener('submit',(event)=>{
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const fileInput = document.getElementById('image');
    const formData = new FormData();
    formData.append("file", fileInput.files[0])

    //upload files
    const uploadFile = async () => {
        const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
        method: 'POST',
        body : formData
        });
        const filesResponse = await response.json();
        console.log("+====== Response File: ",filesResponse)
        return filesResponse;
    }
    uploadFile().then(
        data => {
            console.log("Location image : ", data?.location);
            const createProductFn = async () => {
                const response = await fetch("https://fakestoreapi.com/products", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    image: data?.location,
                    }),
                });
            const product = await response.json();
            console.log(product);
            }
            createProductFn();
        }
    )
    .catch(error => console.log(error))
})