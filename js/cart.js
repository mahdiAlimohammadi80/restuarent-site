
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

const cartItems = document.querySelector('.cart-items');
let cartProduct = JSON.parse(localStorage.getItem('resCart')) || [] ;

function showProduct(){
    cartItems.innerHTML = '';
    let totalCartPrice = 0;
    cartProduct.forEach((pro)=>{
        let TotalPrice = pro.count * pro.price;
        totalCartPrice += TotalPrice;
        let newItem = `<div class="card">
        <div class="image-count">
            <img src="${pro.image}" alt="تصویر آیتم منو" class="menu-card-image">
        </div>
        <div class="details">
            <div class="title-count">
                <h4>${pro.name}</h4>
                <div class="count">
                    <button class="increase-btn" onclick="increaseCount(this)">+</button>
                    <input type="number" value="${pro.count}" disabled>
                    <button class="decrease-btn" onclick="decreaseCount(this)">-</button>
                </div>
            </div>
            <div class="price-count">
                <div class="main-price">
                    <span class="main-price-text">قیمت پایه :</span>
                    <span class="price">${pro.price.toLocaleString()}</span>
                </div>
                <div class="main-count">
                    <span class="main-price-text">تعداد کل:</span>
                    <span>x<span class="count-text">${pro.count}</span></span>
                </div>
                <div class="Total-price">
                    <span class="Total-price-text">قیمت نهایی :</span>
                    <span class="Total">${TotalPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
       </div>`;
       cartItems.innerHTML += newItem;
    })

    let cartTotalPrice = totalCartPrice; 
    let cartCountText = 0; 

    cartProduct.forEach((pro) => {
        cartCountText += pro.count;
    });

    let cartTotalPriceText = cartTotalPrice.toLocaleString(); 
    let resPriceText = cartTotalPrice.toLocaleString(); 

    document.querySelector('.cart-count-text').textContent = cartCountText;
    document.querySelector('.cartTotal-price-text').textContent = cartTotalPriceText;
    document.querySelector('.res-price-text').textContent = resPriceText;
}

function increaseCount(elem){
    let elemCard = elem.closest('.card');
    let elemTitle = elemCard.querySelector('h4').innerHTML;
    console.log(elemTitle);
    cartProduct.forEach((pro)=>{
        if(pro.name == elemTitle){
            pro.count++;
        }
    })
    localStorage.setItem('resCart',JSON.stringify(cartProduct));
    showProduct();
}


function decreaseCount(elem){
    let elemCard = elem.closest('.card');
    let elemTitle = elemCard.querySelector('h4').innerHTML;
    cartProduct.forEach((pro ,index)=>{
        if(pro.name == elemTitle){
            if(pro.count > 0){
                pro.count--;
                if(pro.count == 0){
                    cartProduct.splice(index ,1);
                }
            } 
        }
    })
    localStorage.setItem('resCart',JSON.stringify(cartProduct));
    showProduct();
}


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
    showProduct();
}

function loadProduct() {
    let getLocalData = JSON.parse(localStorage.getItem('resCart'));
    if (getLocalData) {
        cartProduct = JSON.parse(localStorage.getItem('resCart'));
    } else {
        cartProduct = [];
    }
    showProduct();
}

loadProduct();