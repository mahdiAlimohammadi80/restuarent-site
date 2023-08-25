
// add to cart && show carts product

document.addEventListener('DOMContentLoaded',()=>{

    const buyBtn = document.querySelectorAll('.buy-btn');

    buyBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            let mainCard = btn.closest('.card');
            let mainTitle = mainCard.querySelector('h4').innerHTML;
            addProduct(mainTitle);
        });
    });
})


function addProduct(mainTitle) {
    let searchProduct = cartProduct.find((pro) => pro.name == mainTitle);
    if (searchProduct) {
        searchProduct.count++;
        localStorage.setItem('resCart', JSON.stringify(cartProduct));
    } else {
        allProduct.forEach((product) => {
            if (product.name == mainTitle) {
                let newObject = {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    count: product.count
                }
                cartProduct.push(newObject);
                localStorage.setItem('resCart', JSON.stringify(cartProduct));
            }
        })
    }
}